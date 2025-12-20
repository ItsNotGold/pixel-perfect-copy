import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    {
      name: 'word-definitions-api',
      configureServer(server: any) {
        server.middlewares.use('/__api/definitions', async (req: any, res: any, next: any) => {
          const fs = await import('fs/promises');
          const filePath = path.resolve(__dirname, './src/data/storedWordDefinitions.json');

          try {
            if (req.method === 'GET') {
              try {
                const content = await fs.readFile(filePath, 'utf-8');
                res.setHeader('Content-Type', 'application/json');
                res.end(content || '{}');
              } catch (err) {
                // If file doesn't exist, return empty object
                res.setHeader('Content-Type', 'application/json');
                res.end('{}');
              }
              return;
            }

            if (req.method === 'POST') {
              let body = '';
              req.on('data', (chunk: any) => body += chunk);
              req.on('end', async () => {
                try {
                  // Validate JSON
                  const data = JSON.parse(body);
                  
                  // Read existing to ensure we don't overwrite blindly, 
                  // though the client SHOULD send the full updated state or we handle merging here.
                  // For simplicity in this "cache" context, we'll assume the client might send 
                  // a merge patch or we just write what we get if the client handles state.
                  // BUT, to be safe against concurrency, let's read-merge-write here if the client sends partial.
                  // The plan says "Persist results immediately".
                  // Let's implement a smart merge: read current, merge payload, write back.
                  
                  let current = {};
                  try {
                    const existingContent = await fs.readFile(filePath, 'utf-8');
                    current = JSON.parse(existingContent || '{}');
                  } catch (e) { /* ignore */ }
                  
                  const merged = { ...current, ...data };
                  
                  await fs.writeFile(filePath, JSON.stringify(merged, null, 2), 'utf-8');
                  
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: true }));
                } catch (e) {
                  console.error('Error saving definitions:', e);
                  res.statusCode = 500;
                  res.end(JSON.stringify({ error: 'Failed to save definitions' }));
                }
              });
              return;
            }
          } catch (e) {
            console.error('Middleware error:', e);
            next(e);
          }
          next();
        });
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
