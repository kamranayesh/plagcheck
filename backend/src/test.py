# Mention the language keyword
import language_tool_python
# tool = language_tool_python.LanguageTool('en-US')
tool = language_tool_python.LanguageToolPublicAPI('en-US')
i = 0
  
# Path of file which needs to be checked
with open(r'a.txt', 'r') as fin:  
               
    for line in fin:
        matches = tool.check(line)
        i = i + len(matches)     
        pass
  
# prints total mistakes which are found 
# from the document
print("No. of mistakes found in document is ", i)
print()
    
# prints mistake one by one 
for mistake in matches:
    print(mistake)
    print()