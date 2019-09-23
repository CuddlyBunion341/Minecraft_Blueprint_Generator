import os
string = ""
for root, dirs, files in os.walk('/Users/daniel/Desktop/Minecraft_Blueprint_Generator/project'):
    for file in files:
        if file.endswith('.js'):
            pth = os.path.join(root, file)
            cptpth = '<script src="' + str(pth).split('/Minecraft_Blueprint_Generator/project/')[1] + '" charset="utf-8"></script>'
            print(cptpth)
            string += cptpth + "\n"
        if file.endswith('.css'):
            pth = os.path.join(root, file)
            cptpth = '<link rel="stylesheet" href="' + str(pth).split('/Minecraft_Blueprint_Generator/project/')[1] + '">'
            print(cptpth)
            string += cptpth + "\n"
print("your code was copied to the clipboard :)")
os.system("echo '%s' | pbcopy" % string)
