$(document).ready((function(){$(".form__label-radio").on("click",(function(){let i=$(this),t=$(".form__radio-group");t.removeClass("active"),i.closest(t).hasClass("active")||i.closest(t).addClass("active")})),$(".subs-wrapper").each((function(){let i=$(this).find("input"),t=$(this).find("ul");$(this).on("click",(function(){t.stop().slideToggle()})),t.on("click","li",(function(){i.val($(this).text())}))}))}));
//# sourceMappingURL=main.js.map