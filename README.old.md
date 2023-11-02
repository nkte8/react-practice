# portfolio  
フロントエンドの勉強もかねて。  
Reactでフロントエンド・Typescriptでバックエンドなモダンなやつをやってみたいな...

# 環境条件

- dockerが利用可能であること

# 初期化方法

nodejsコンテナからcreate-react-appを実行
create-react-appは暴力的なコマンドで、もともと存在していた `.git`であろうと容赦なく消す（Readme.mdだけはバックアップしてくれる）ため注意
```
docker run --rm -v $PWD:/src -w /src -u `id -u`:`id -g` -it node:lts /bin/bash
npx create-react-app . --template typescript
```

# 実行方法

```
docker run --rm -v $PWD:/src -w /src -u `id -u`:`id -g` -p 3000:3000 -it node:lts /bin/bash
npm start
```
localhost:3000へアクセスすると、ページを表示

react routerの導入
```
yarn add react-router-dom
```

# 参考

https://qiita.com/YSasago/items/f00333b60a2b01be4bb7