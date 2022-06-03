'use strict';

//sumパッケージを作成
//sumパッケージの中身は、addという関数をメソッドに持つオブジェクト

/**  
 * 数値の配列を受け取って、その要素の合計を返す関数
 */
function add(numbers){
    let result = 0;
    for (const num of numbers) {
        result = result + num;
    }
    return result;
}

//モジュールとして使えるよう、エキスポート
module.exports = {
    //左側がエキスポートするオブジェクトのプロパティ名で、右側が上で定義した関数名
    add: add
};

//エキスポートするオブジェクトのプロパティ名と関数名が同じなら、下記のようにも書ける
//module.exports = { add };