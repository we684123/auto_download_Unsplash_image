// ==UserScript==
// @name         auto_download_Unsplash_image
// @name:zh-TW   自動下載 Unsplash 的照片
// @version      2.0
// @description  while you open Unspladh photo web , will download this photo.
// @description:zh-tw  當你打開 Unsplash 網站的照片網址時，這個腳本會自動下載圖片到你的電腦。
// @author       we684123@github
// @namespace    https://github.com/we684123/auto_download_Unsplash_image
// @match        https://unsplash.com/photos/*
// @grant        GM_xmlhttpRequest
// @grant        GM_download
// @connect      unsplash.com
// @run-at       document-end
// @domain       https://unsplash.com/
// ==/UserScript==

(function() {
  //基礎定義
  var name_st_str = "&dl";
  var offset = 4;

  var image_download_url = document.querySelector("a.untracked").href;
  try {
    console.log("===== auto_download_image_ing =====");
    GM_xmlhttpRequest({
      method: "GET",
      url: image_download_url,

      onload: function(response) {
        var idl = String(response["finalUrl"]);
        var st = idl.indexOf(name_st_str) + offset;
        var image_name = idl.slice(st);
        var arg = {
          url: idl,
          name: image_name,
        };
        var result = GM_download(arg);
      },
    });
    var magic = [
      "  ∧＿∧\n",
      "（｡･ω･｡)つ━☆・*。\n",
      "⊂　　 ノ 　　　・゜+.\n",
      "しーＪ　　　°。+ *´¨)\n",
      "　　       　　.· ´¸.·*´¨) ¸.·*¨)\n",
      "　　     　(¸.·´ (¸.·’*"
    ]
    console.log(magic.join(""));
    console.log("====== download done. ======");
  } catch (e) {
    console.log("error:");
    console.log(e);
  } finally {
    console.log("====== end ======");
  }
})();
