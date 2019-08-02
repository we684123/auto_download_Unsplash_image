// ==UserScript==
// @name         auto_download_Unsplash_image
// @name:zh-TW   自動下載 Unsplash 的照片
// @version      1.0
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
  var class_name = "_1yvXd _1l4Hh _1CBrG _1zIyn xLon9 _1Tfeo _1AA_u TPbmh _2Xklx"
  var name_st_str = '&dl'
  var offset = 4

  var image_download_url = document.getElementsByClassName(class_name)[0].href;
  try {
    console.log("===== auto_download_image_ing =====");
    GM_xmlhttpRequest({
      method: "GET",
      url: image_download_url,

      onload: function(response) {
        //console.log('response');
        //console.log(response);
        //console.log(response['responseHeaders']);

        var idl = String(response['finalUrl'])
        var st = idl.indexOf(name_st_str) + offset
        var image_name = idl.slice(st)
        //console.log('idl');
        //console.log(idl);
        var arg = {
          url: idl,
          name: image_name
        };
        var result = GM_download(arg);
      }
    })
  } catch (e) {
    console.log('error:');
    console.log(e);
  } finally {
    console.log('===== end =====');
  }

})();