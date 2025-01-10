---
title: "Hugoのすすめ"
tags: ["Hugo", "Web"]
categories: ["WEBの話"]
draft: false
---

# Hugoのすすめ

ここ数年間、SSRやらReactやらが流行っている昨今ですが、ここであえて静的サイトジェネレーターのHugoをおすすめしたいと思います。  
このブログもそうですが、Next.jsやGatsby.jsを使っても正直ほとんど機能を使い切れていないのが現状です。それに対してHugoはシンプルで、かつ十分な機能を持っているため、私のような適当なエンジニアにはとても使いやすいです。

---

## Hugoのメリット

### 1. ビルドがとにかく速い

Hugoの特徴の1つとして、とにかくビルドが速いことが挙げられます。一般的に、ReactやVue.jsをベースにした静的サイトジェネレーター(Next.jsやNuxt.js、Gatsby.jsなど)でもビルド速度はそれなりに速いですが、大規模なサイトになるとやはりビルド時間が増えてきます。HugoはGo製ということもあり、大量のコンテンツがあってもビルドが爆速です。

### 2. テンプレートがシンプル

Hugoの記法は、Reactに慣れ親しんだ人からするとかなり原始的でやりづらいと感じるかもしれません。ですが、逆に言えば非常にシンプルで、Goのテンプレートエンジンをベースとしているため、Go言語の知識があればより柔軟にカスタマイズできます。

### 3. 部品化したいときはpartialを使う

コンポーネントを使いたい場合、ReactやVue.jsのように高度なコンポーネント指向の開発は難しいですが、Hugoには`partial`という機能があります。共通要素や複数ページで使いたいパーツをまとめておけば、`{{ partial "パーツ名" . }}`のように呼び出して使い回せます。

### 4. JavaScriptも使える

Hugoは静的サイトジェネレーターなのであくまでもHTMLファイルを吐き出しますが、ビルド後のサイト上では普通にJavaScriptを使うことができます。小規模なアニメーションやインタラクション程度であれば、CDNからライブラリを読み込んで利用すれば十分です。私のサイトでも、アニメーションライブラリの[GSAP](https://greensock.com/gsap/)を使っていますが、特に困ることはありません。

### 5. 多くの実績がある

Kubernetes公式サイトをはじめ、ドキュメント系サイトや個人ブログなど、Hugoは世界中で幅広く使われています。公式ドキュメントも充実しており、テーマの数も多いです。そのため、スターターとしては学習コストが比較的低い静的サイトジェネレーターと言えます。

---

## サイト構成例

このサイトのテンプレートは以下のようになっています。

```HTML
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    {{- with .Title -}}
      <meta property="og:title" content="{{ . }}" />
    {{- end -}}
    <meta
      property="og:description"
      content="{{ with .Description }}
        {{ . }}
      {{ else }}
        {{ .Site.Params.defaultDescription }}
      {{ end }}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{{ .Permalink }}" />
    <meta
      property="og:image"
      content="{{ with .Params.image }}
        {{ . | absURL }}
      {{ else }}
        {{ .Site.Params.defaultImage | absURL }}
      {{ end }}" />
    <meta property="og:site_name" content="{{ .Site.Title }}" />
    <meta name="twitter:card" content="summary_large_image" />
    <title>{{ .Title }}</title>
    <link href="/css/style.css" rel="stylesheet" />
    <script>
      const userPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      document.documentElement.setAttribute(
        "data-theme",
        userPrefersDark ? "business" : "corporate",
      );
    </script>
  </head>
  <body class="">
    <!-- ヘッダー -->
    {{ partial "header.html" . }}


    <!-- フルスクリーンオーバーレイ -->
    {{ partial "fullscreen.html" . }}


    <!-- メインコンテンツ -->
    <main class="p-10">{{ block "main" . }}{{ end }}</main>

    <!-- フッター -->
    <footer
      class="p-5 text-center bg-primary text-primary-content shadow-classic">
      <p>© 2004 - 2024 Small-engineer-net All Rights Reserved.</p>
    </footer>
  </body>
  <script src="/js/index.js" defer></script>
</html>
```

- **\_default/baseof.html**  
  HTMLの基本となるレイアウト。`{{ block "main" . }}{{ end }}`のように、メインコンテンツを埋め込む箇所を定義しています。
- **\_default/single.html**  
  記事ページなど、1つのコンテンツ（シングル）を表示するためのテンプレート。
- **\_default/list.html**  
  一覧ページなど、複数のコンテンツを表示する場合のテンプレート。
- **partials/以下**  
  ヘッダーやフッター、スクリプトの読み込みなど、共通化したい要素をまとめる場所。

このように構造がはっきりしているため、迷いなくファイルを配置できる点がHugoの良いところです。

---

## 実際に始めてみる

1. **Hugoのインストール**  
   [公式サイト](https://gohugo.io/)のダウンロードページ、もしくはHomebrewやChocolateyなどを使ってインストールするのがお手軽です。

2. **新規サイトを作成**

   ```bash
   hugo new site my-hugo-site
   ```

3. **テーマを導入する**  
   Hugo公式のテーマ集から好きなものを選ぶか、GitHubで公開されているテーマをcloneします。

   ```bash
   cd my-hugo-site
   git init
   git submodule add https://github.com/xxx/awesome-hugo-theme.git themes/awesome
   ```

4. **コンテンツを追加**

   ```bash
   hugo new posts/my-first-post.md
   ```

   すると`content/posts/my-first-post.md`というMarkdownファイルが生成されるので、中身を編集します。

5. **ローカルサーバーで確認**

   ```bash
   hugo server -D
   ```

   上記コマンドでローカルサーバーが立ち上がり、`http://localhost:1313` でプレビューを確認できます。

6. **ビルドして公開**
   ```bash
   hugo
   ```
   デフォルトでは`public`フォルダが出力されるので、それをGitHub PagesやNetlifyにデプロイするだけ。設定さえしておけば自動デプロイも可能です。

---

## Hugoに向いているケース

- **シンプルなブログやコーポレートサイト**  
  デザインや構造が比較的シンプルで、そこまで複雑なJavaScriptを使わないサイトにとても向いています。
- **技術ドキュメント系サイト**  
  大量のMarkdownファイルを高速にビルドしたい場合にもHugoはおすすめ。
- **React/Vue.jsのフル機能を使いこなせない場合**  
  「大規模なSPA(シングルページアプリケーション)までは必要ない」という場合、SSRフレームワークではオーバースペックになりがち。そんなときにHugoのシンプルさが活きてきます。

---

## まとめ

ReactやVue.js、Svelteなど、フロントエンドは多様化していますが、静的サイトジェネレーターのHugoはシンプルながらも十分な機能と拡張性を兼ね備えています。特に

- ビルド速度
- テンプレートの分かりやすさ
- ドキュメントとテーマの豊富さ

という点で初心者から中級者まで使いやすいツールです。もし「モダンフレームワークを色々使ってみたけど、結局あまり活かせていない…」と感じるようなら、ぜひ一度Hugoを試してみてはいかがでしょうか。

Kubernetesの公式サイトをはじめ、世界中で使われている実績もあるので、勉強時間や開発コストをあまりかけられない方にもおすすめです。これを機に、ぜひHugoのシンプルな世界をのぞいてみてください。
