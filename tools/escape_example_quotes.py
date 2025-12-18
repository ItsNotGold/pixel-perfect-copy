from pathlib import Path
import re
p=Path('src/data/wordDefinitions.ts')
s=p.read_text(encoding='utf-8')

out=[]
i=0
L=len(s)
while True:
    idx=s.find('example: "',i)
    if idx==-1:
        out.append(s[i:])
        break
    out.append(s[i:idx+10]) # include up to opening quote
    # find the closing quote followed by a newline which indicates end of example string
    end_marker = '\"\n'
    j = s.find(end_marker, idx+10)
    if j == -1:
        # fallback to previous behavior
        j = idx+10
        while j < L:
            if s[j] == '"' and (j == 0 or s[j-1] != '\\'):
                break
            j += 1
        if j >= L:
            out.append(s[idx+10:])
            break
        inner = s[idx+10:j]
        inner_escaped = inner.replace('"','\\"')
        out.append(inner_escaped)
        out.append('"')
        i = j+1
        continue
    inner = s[idx+10:j]
    # escape internal double quotes
    inner_escaped = inner.replace('"','\\"')
    out.append(inner_escaped)
    # append the closing quote and newline
    out.append('\"\n')
    i = j+2

new=''.join(out)
if new!=s:
    p.write_text(new,encoding='utf-8')
    print('Escaped example inner quotes')
else:
    print('No changes made')
