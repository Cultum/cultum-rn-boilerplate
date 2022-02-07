# cultum-rn-boilerplate

This boilerplate currently includes.

- react-native
- react-navigation
- redux
- typescript
- styled-components

## How to use

Firstly you need to uninstall old react-native-cli and install @react-native-community/cli

for npm:
```
npm uninstall -g react-native-cli 
npm i -g @react-native-community/cli
```
for yarn:
```
yarn global remove react-native-cli  
yarn global add @react-native-community/cli  
```

create app:
```
npx react-native init <app-name> --template https://github.com/Cultum/cultum-rn-boilerplate.git

cd <app-name>

git init .
git add .
git commit -m "init"

git remote add origin <repository url>
git branch -M master
git push -u origin master
```
