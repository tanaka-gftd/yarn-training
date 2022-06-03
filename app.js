'use strict';

//axios...httpリクエストを送れるライブラリ
//axiosパッケージをrequire関数でモジュール値して取得し、変数に格納
const axios = require('axios');

//axios.getで指定したURLにHTTPリクエストを送信し、さらにhenメソッドでHTTPレスポンスを表示する関数を渡す
//変数resは任意の名前でいい
axios.get('https://www.google.com').then(res => {
    console.log(res.data);
});