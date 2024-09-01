// ==UserScript==
// @name         StbTotalSkillTree
// @version      0.1
// @description  リセ前も含めて星珠状況わかれ
// @author       L0cul1t3
// @match        https://soraniwa.428.st/stb/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=428.st
// @grant        none
// ==/UserScript==
/* global jQuery:false */

(($) => {
  'use strict';

  $(window).on("load",()=>{
    const SkillNum = $('input[value="makeskill"] ~ p > select[name="sno"] option[value="0"]').siblings().length;
    const SkillList = [...Array(SkillNum)].fill("");
    for(let i=1;i<=SkillNum;i++){
      SkillList[i-1] = $(`input[value="makeskill"] ~ p > select[name="sno"] option:eq(${i})`).text().replace(/(【★..】\[..\].+)（.+）/g, "$1");
    }
    const SkillTree = $('input[value="orblevelup"] ~ span[class^="skilltip"] ');
    for(let i=0;i<SkillTree.length;i++){
      if($(SkillTree[i]).hasClass("skilltipB")) continue;
      const isLearned = ($.inArray($(SkillTree[i]).data('ctip'),SkillList) === -1)?false:true;
      if(isLearned){
        $(SkillTree[i]).css("backgroundColor","#967c63");
      }
    }
  });
})(jQuery);