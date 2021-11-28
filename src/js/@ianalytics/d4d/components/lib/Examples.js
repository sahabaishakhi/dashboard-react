import Filter from "./Filter";
import Tabs from "./Tabs";
import Checkbox from "./Checkbox";
import Logo from "./logo/Logo";

function Examples() {
  function callbackFuncFilter(option) {
    console.log("callback", option);
  }

  function callbackFuncTab(option) {
    console.log("callback", option);
  }

  function callbackFuncCheckbox(checked) {
    console.log("callback", checked);
  }

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "bg-dark"
  }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("h1", {
    className: "h1-dark"
  }, "Headline 1 f\xFCr \xDCberschriften"), /*#__PURE__*/React.createElement("h2", {
    className: "h2-dark"
  }, "Headline 2 f\xFCr verschiedene Sektionen"), /*#__PURE__*/React.createElement("h3", {
    className: "h3-dark"
  }, "Headline f\xFCr unterschiedliche Abschnitte"), /*#__PURE__*/React.createElement("h4", {
    className: "h4-dark"
  }, "Headline 4 als Definition bzw Subline von H1 oder H2"), /*#__PURE__*/React.createElement("p", {
    className: "p-dark"
  }, "Flie\xDFtext: Weit hinten, hinter den Wortbergen, fern der L\xE4nder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der K\xFCste des Semantik, eines gro\xDFen Sprachozeans. Ein kleines B\xE4chlein namens Duden flie\xDFt durch ihren Ort und versorgt sie mit den n\xF6tigen Regelialien"), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
    className: "bg-light"
  }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("h1", null, "Headline 1 f\xFCr \xDCberschriften"), /*#__PURE__*/React.createElement("h2", null, "Headline 2 f\xFCr verschiedene Sektionen"), /*#__PURE__*/React.createElement("h3", null, "Headline f\xFCr unterschiedliche Abschnitte"), /*#__PURE__*/React.createElement("h4", null, "Headline 4 als Definition bzw Subline von H1 oder H2"), /*#__PURE__*/React.createElement("p", null, "Flie\xDFtext: Weit hinten, hinter den Wortbergen, fern der L\xE4nder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der K\xFCste des Semantik, eines gro\xDFen Sprachozeans. Ein kleines B\xE4chlein namens Duden flie\xDFt durch ihren Ort und versorgt sie mit den n\xF6tigen Regelialien"), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
    className: "bg-dark"
  }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
    className: "btn-primary-dark"
  }, "PRIMARY"), /*#__PURE__*/React.createElement("button", {
    className: "btn-secondary-dark"
  }, "Secondary"), /*#__PURE__*/React.createElement("button", {
    className: "btn-tertiary-dark"
  }, "Tertiary"), /*#__PURE__*/React.createElement("br", null), " "), /*#__PURE__*/React.createElement("div", {
    className: "bg-light"
  }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
    className: "btn-primary-light"
  }, "PRIMARY"), /*#__PURE__*/React.createElement("button", {
    className: "btn-secondary-light"
  }, "Secondary"), /*#__PURE__*/React.createElement("button", {
    className: "btn-tertiary-light"
  }, "Tertiary"), /*#__PURE__*/React.createElement("br", null), " "), /*#__PURE__*/React.createElement("div", {
    className: "bg-dark"
  }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Filter, {
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    callbackFunc: callbackFuncFilter,
    defaultOption: 0,
    resetOnReload: false,
    localStorageVar: "filter1",
    theme: "dark"
  }), /*#__PURE__*/React.createElement("br", null), " ", /*#__PURE__*/React.createElement("br", null), " "), /*#__PURE__*/React.createElement("div", {
    className: "bg-light"
  }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Filter, {
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    callbackFunc: callbackFuncFilter,
    defaultOption: 0,
    resetOnReload: false,
    localStorageVar: "filter2",
    theme: "light"
  }), /*#__PURE__*/React.createElement("br", null), " ", /*#__PURE__*/React.createElement("br", null), " "), /*#__PURE__*/React.createElement("div", {
    className: "bg-dark"
  }, /*#__PURE__*/React.createElement(Logo, {
    theme: "dark",
    width: "200px"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Tabs, {
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    callbackFunc: callbackFuncTab,
    defaultOption: 0,
    resetOnReload: false,
    localStorageVar: "tabs1",
    theme: "dark"
  }), /*#__PURE__*/React.createElement("br", null), " ", /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
    className: "bg-light"
  }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Logo, {
    theme: "light",
    width: "100px"
  }), /*#__PURE__*/React.createElement(Tabs, {
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    callbackFunc: callbackFuncTab,
    defaultOption: 0,
    resetOnReload: false,
    localStorageVar: "tabs1",
    theme: "light"
  }), /*#__PURE__*/React.createElement("br", null), " ", /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
    className: "bg-dark"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "input-dark",
    placeholder: "input field"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "checkbox-container"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: true,
    label: "Label",
    callbackFunc: callbackFuncCheckbox,
    resetOnReload: false,
    localStorageVar: "checkbox1",
    theme: "dark"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    checked: false,
    label: "Label2",
    callbackFunc: callbackFuncCheckbox,
    resetOnReload: false,
    localStorageVar: "checkbox2",
    theme: "dark"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bg-light"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "input-light",
    placeholder: "input field"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "checkbox-container"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: true,
    label: "Label",
    callbackFunc: callbackFuncCheckbox,
    resetOnReload: false,
    localStorageVar: "checkbox1",
    theme: "light"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    checked: false,
    label: "Label2",
    callbackFunc: callbackFuncCheckbox,
    resetOnReload: false,
    localStorageVar: "checkbox2",
    theme: "light"
  }))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null));
}

export default Examples;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2pzeC9AaWFuYWx5dGljcy9kNGQvY29tcG9uZW50cy9saWIvRXhhbXBsZXMuanN4Il0sIm5hbWVzIjpbIkZpbHRlciIsIlRhYnMiLCJDaGVja2JveCIsIkxvZ28iLCJFeGFtcGxlcyIsImNhbGxiYWNrRnVuY0ZpbHRlciIsIm9wdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJjYWxsYmFja0Z1bmNUYWIiLCJjYWxsYmFja0Z1bmNDaGVja2JveCIsImNoZWNrZWQiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLE1BQVAsTUFBbUIsVUFBbkI7QUFDQSxPQUFPQyxJQUFQLE1BQWlCLFFBQWpCO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixZQUFyQjtBQUNBLE9BQU9DLElBQVAsTUFBaUIsYUFBakI7O0FBRUEsU0FBU0MsUUFBVCxHQUFvQjtBQUNsQixXQUFTQyxrQkFBVCxDQUE0QkMsTUFBNUIsRUFBb0M7QUFDbENDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JGLE1BQXhCO0FBQ0Q7O0FBRUQsV0FBU0csZUFBVCxDQUF5QkgsTUFBekIsRUFBaUM7QUFDL0JDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JGLE1BQXhCO0FBQ0Q7O0FBRUQsV0FBU0ksb0JBQVQsQ0FBOEJDLE9BQTlCLEVBQXVDO0FBQ3JDSixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCRyxPQUF4QjtBQUNEOztBQUVELHNCQUNFLDhDQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDRSwrQkFERixlQUVFO0FBQUksSUFBQSxTQUFTLEVBQUM7QUFBZCwwQ0FGRixlQUdFO0FBQUksSUFBQSxTQUFTLEVBQUM7QUFBZCxnREFIRixlQUlFO0FBQUksSUFBQSxTQUFTLEVBQUM7QUFBZCxtREFKRixlQUtFO0FBQUksSUFBQSxTQUFTLEVBQUM7QUFBZCw0REFMRixlQVFFO0FBQUcsSUFBQSxTQUFTLEVBQUM7QUFBYixp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RUFBQztBQU5SLElBREYsZUFTRSxvQkFBQyxRQUFEO0FBQ0UsSUFBQSxPQUFPLEVBQUUsS0FEWDtBQUVFLElBQUEsS0FBSyxFQUFDLFFBRlI7QUFHRSxJQUFBLFlBQVksRUFBRUEsb0JBSGhCO0FBSUUsSUFBQSxhQUFhLEVBQUUsS0FKakI7QUFLRSxJQUFBLGVBQWUsRUFBQyxXQUxsQjtBQU1FLElBQUEsS0FBSyxFQUFDO0FBTlIsSUFURixDQVJGLENBOUhGLGVBeUpFLCtCQXpKRixlQTJKRSwrQkEzSkYsZUE0SkUsK0JBNUpGLGVBNkpFLCtCQTdKRixDQURGO0FBaUtEOztBQUVELGVBQWVOLFFBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmlsdGVyIGZyb20gXCIuL0ZpbHRlclwiO1xyXG5pbXBvcnQgVGFicyBmcm9tIFwiLi9UYWJzXCI7XHJcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiLi9DaGVja2JveFwiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi9sb2dvL0xvZ29cIjtcclxuXHJcbmZ1bmN0aW9uIEV4YW1wbGVzKCkge1xyXG4gIGZ1bmN0aW9uIGNhbGxiYWNrRnVuY0ZpbHRlcihvcHRpb24pIHtcclxuICAgIGNvbnNvbGUubG9nKFwiY2FsbGJhY2tcIiwgb3B0aW9uKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNhbGxiYWNrRnVuY1RhYihvcHRpb24pIHtcclxuICAgIGNvbnNvbGUubG9nKFwiY2FsbGJhY2tcIiwgb3B0aW9uKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNhbGxiYWNrRnVuY0NoZWNrYm94KGNoZWNrZWQpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiY2FsbGJhY2tcIiwgY2hlY2tlZCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1kYXJrXCI+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImgxLWRhcmtcIj5IZWFkbGluZSAxIGbDvHIgw5xiZXJzY2hyaWZ0ZW48L2gxPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJoMi1kYXJrXCI+SGVhZGxpbmUgMiBmw7xyIHZlcnNjaGllZGVuZSBTZWt0aW9uZW48L2gyPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJoMy1kYXJrXCI+SGVhZGxpbmUgZsO8ciB1bnRlcnNjaGllZGxpY2hlIEFic2Nobml0dGU8L2gzPlxyXG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJoNC1kYXJrXCI+XHJcbiAgICAgICAgICBIZWFkbGluZSA0IGFscyBEZWZpbml0aW9uIGJ6dyBTdWJsaW5lIHZvbiBIMSBvZGVyIEgyXHJcbiAgICAgICAgPC9oND5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwLWRhcmtcIj5cclxuICAgICAgICAgIEZsaWXDn3RleHQ6IFdlaXQgaGludGVuLCBoaW50ZXIgZGVuIFdvcnRiZXJnZW4sIGZlcm4gZGVyIEzDpG5kZXJcclxuICAgICAgICAgIFZva2FsaWVuIHVuZCBLb25zb25hbnRpZW4gbGViZW4gZGllIEJsaW5kdGV4dGUuIEFiZ2VzY2hpZWRlbiB3b2huZW5cclxuICAgICAgICAgIHNpZSBpbiBCdWNoc3RhYmhhdXNlbiBhbiBkZXIgS8O8c3RlIGRlcyBTZW1hbnRpaywgZWluZXMgZ3Jvw59lblxyXG4gICAgICAgICAgU3ByYWNob3plYW5zLiBFaW4ga2xlaW5lcyBCw6RjaGxlaW4gbmFtZW5zIER1ZGVuIGZsaWXDn3QgZHVyY2ggaWhyZW4gT3J0XHJcbiAgICAgICAgICB1bmQgdmVyc29yZ3Qgc2llIG1pdCBkZW4gbsO2dGlnZW4gUmVnZWxpYWxpZW5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1saWdodFwiPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIDxoMT5IZWFkbGluZSAxIGbDvHIgw5xiZXJzY2hyaWZ0ZW48L2gxPlxyXG4gICAgICAgIDxoMj5IZWFkbGluZSAyIGbDvHIgdmVyc2NoaWVkZW5lIFNla3Rpb25lbjwvaDI+XHJcbiAgICAgICAgPGgzPkhlYWRsaW5lIGbDvHIgdW50ZXJzY2hpZWRsaWNoZSBBYnNjaG5pdHRlPC9oMz5cclxuICAgICAgICA8aDQ+SGVhZGxpbmUgNCBhbHMgRGVmaW5pdGlvbiBiencgU3VibGluZSB2b24gSDEgb2RlciBIMjwvaDQ+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBGbGllw590ZXh0OiBXZWl0IGhpbnRlbiwgaGludGVyIGRlbiBXb3J0YmVyZ2VuLCBmZXJuIGRlciBMw6RuZGVyXHJcbiAgICAgICAgICBWb2thbGllbiB1bmQgS29uc29uYW50aWVuIGxlYmVuIGRpZSBCbGluZHRleHRlLiBBYmdlc2NoaWVkZW4gd29obmVuXHJcbiAgICAgICAgICBzaWUgaW4gQnVjaHN0YWJoYXVzZW4gYW4gZGVyIEvDvHN0ZSBkZXMgU2VtYW50aWssIGVpbmVzIGdyb8OfZW5cclxuICAgICAgICAgIFNwcmFjaG96ZWFucy4gRWluIGtsZWluZXMgQsOkY2hsZWluIG5hbWVucyBEdWRlbiBmbGllw590IGR1cmNoIGlocmVuIE9ydFxyXG4gICAgICAgICAgdW5kIHZlcnNvcmd0IHNpZSBtaXQgZGVuIG7DtnRpZ2VuIFJlZ2VsaWFsaWVuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1kYXJrXCI+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tcHJpbWFyeS1kYXJrXCI+UFJJTUFSWTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXNlY29uZGFyeS1kYXJrXCI+U2Vjb25kYXJ5PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tdGVydGlhcnktZGFya1wiPlRlcnRpYXJ5PC9idXR0b24+XHJcbiAgICAgICAgPGJyPjwvYnI+e1wiIFwifVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1saWdodFwiPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnktbGlnaHRcIj5QUklNQVJZPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tc2Vjb25kYXJ5LWxpZ2h0XCI+U2Vjb25kYXJ5PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tdGVydGlhcnktbGlnaHRcIj5UZXJ0aWFyeTwvYnV0dG9uPlxyXG4gICAgICAgIDxicj48L2JyPntcIiBcIn1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWRhcmtcIj5cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICA8RmlsdGVyXHJcbiAgICAgICAgICBvcHRpb25zPXtbXCJPcHRpb24gMVwiLCBcIk9wdGlvbiAyXCIsIFwiT3B0aW9uIDNcIiwgXCJPcHRpb24gNFwiXX1cclxuICAgICAgICAgIGNhbGxiYWNrRnVuYz17Y2FsbGJhY2tGdW5jRmlsdGVyfVxyXG4gICAgICAgICAgZGVmYXVsdE9wdGlvbj17MH1cclxuICAgICAgICAgIHJlc2V0T25SZWxvYWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlVmFyPVwiZmlsdGVyMVwiXHJcbiAgICAgICAgICB0aGVtZT17XCJkYXJrXCJ9XHJcbiAgICAgICAgPjwvRmlsdGVyPlxyXG4gICAgICAgIDxicj48L2JyPiA8YnI+PC9icj57XCIgXCJ9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWxpZ2h0XCI+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgPEZpbHRlclxyXG4gICAgICAgICAgb3B0aW9ucz17W1wiT3B0aW9uIDFcIiwgXCJPcHRpb24gMlwiLCBcIk9wdGlvbiAzXCIsIFwiT3B0aW9uIDRcIl19XHJcbiAgICAgICAgICBjYWxsYmFja0Z1bmM9e2NhbGxiYWNrRnVuY0ZpbHRlcn1cclxuICAgICAgICAgIGRlZmF1bHRPcHRpb249ezB9XHJcbiAgICAgICAgICByZXNldE9uUmVsb2FkPXtmYWxzZX1cclxuICAgICAgICAgIGxvY2FsU3RvcmFnZVZhcj1cImZpbHRlcjJcIlxyXG4gICAgICAgICAgdGhlbWU9e1wibGlnaHRcIn1cclxuICAgICAgICA+PC9GaWx0ZXI+XHJcbiAgICAgICAgPGJyPjwvYnI+IDxicj48L2JyPntcIiBcIn1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZGFya1wiPlxyXG4gICAgICAgIDxMb2dvIHRoZW1lPVwiZGFya1wiIHdpZHRoPVwiMjAwcHhcIiAvPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIDxUYWJzXHJcbiAgICAgICAgICBvcHRpb25zPXtbXCJPcHRpb24gMVwiLCBcIk9wdGlvbiAyXCIsIFwiT3B0aW9uIDNcIiwgXCJPcHRpb24gNFwiXX1cclxuICAgICAgICAgIGNhbGxiYWNrRnVuYz17Y2FsbGJhY2tGdW5jVGFifVxyXG4gICAgICAgICAgZGVmYXVsdE9wdGlvbj17MH1cclxuICAgICAgICAgIHJlc2V0T25SZWxvYWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlVmFyPVwidGFiczFcIlxyXG4gICAgICAgICAgdGhlbWU9XCJkYXJrXCJcclxuICAgICAgICA+PC9UYWJzPlxyXG4gICAgICAgIDxicj48L2JyPiA8YnI+PC9icj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctbGlnaHRcIj5cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICA8TG9nbyB0aGVtZT1cImxpZ2h0XCIgd2lkdGg9XCIxMDBweFwiIC8+XHJcbiAgICAgICAgPFRhYnNcclxuICAgICAgICAgIG9wdGlvbnM9e1tcIk9wdGlvbiAxXCIsIFwiT3B0aW9uIDJcIiwgXCJPcHRpb24gM1wiLCBcIk9wdGlvbiA0XCJdfVxyXG4gICAgICAgICAgY2FsbGJhY2tGdW5jPXtjYWxsYmFja0Z1bmNUYWJ9XHJcbiAgICAgICAgICBkZWZhdWx0T3B0aW9uPXswfVxyXG4gICAgICAgICAgcmVzZXRPblJlbG9hZD17ZmFsc2V9XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2VWYXI9XCJ0YWJzMVwiXHJcbiAgICAgICAgICB0aGVtZT1cImxpZ2h0XCJcclxuICAgICAgICA+PC9UYWJzPlxyXG4gICAgICAgIDxicj48L2JyPiA8YnI+PC9icj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZGFya1wiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtZGFya1wiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImlucHV0IGZpZWxkXCJcclxuICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrYm94LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgIGNoZWNrZWQ9e3RydWV9XHJcbiAgICAgICAgICAgIGxhYmVsPVwiTGFiZWxcIlxyXG4gICAgICAgICAgICBjYWxsYmFja0Z1bmM9e2NhbGxiYWNrRnVuY0NoZWNrYm94fVxyXG4gICAgICAgICAgICByZXNldE9uUmVsb2FkPXtmYWxzZX1cclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlVmFyPVwiY2hlY2tib3gxXCJcclxuICAgICAgICAgICAgdGhlbWU9XCJkYXJrXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgY2hlY2tlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgIGxhYmVsPVwiTGFiZWwyXCJcclxuICAgICAgICAgICAgY2FsbGJhY2tGdW5jPXtjYWxsYmFja0Z1bmNDaGVja2JveH1cclxuICAgICAgICAgICAgcmVzZXRPblJlbG9hZD17ZmFsc2V9XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZVZhcj1cImNoZWNrYm94MlwiXHJcbiAgICAgICAgICAgIHRoZW1lPVwiZGFya1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1saWdodFwiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtbGlnaHRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJpbnB1dCBmaWVsZFwiXHJcbiAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja2JveC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICBjaGVja2VkPXt0cnVlfVxyXG4gICAgICAgICAgICBsYWJlbD1cIkxhYmVsXCJcclxuICAgICAgICAgICAgY2FsbGJhY2tGdW5jPXtjYWxsYmFja0Z1bmNDaGVja2JveH1cclxuICAgICAgICAgICAgcmVzZXRPblJlbG9hZD17ZmFsc2V9XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZVZhcj1cImNoZWNrYm94MVwiXHJcbiAgICAgICAgICAgIHRoZW1lPVwibGlnaHRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICBjaGVja2VkPXtmYWxzZX1cclxuICAgICAgICAgICAgbGFiZWw9XCJMYWJlbDJcIlxyXG4gICAgICAgICAgICBjYWxsYmFja0Z1bmM9e2NhbGxiYWNrRnVuY0NoZWNrYm94fVxyXG4gICAgICAgICAgICByZXNldE9uUmVsb2FkPXtmYWxzZX1cclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlVmFyPVwiY2hlY2tib3gyXCJcclxuICAgICAgICAgICAgdGhlbWU9XCJsaWdodFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJyPjwvYnI+XHJcblxyXG4gICAgICA8YnI+PC9icj5cclxuICAgICAgPGJyPjwvYnI+XHJcbiAgICAgIDxicj48L2JyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhhbXBsZXM7XHJcbiJdfQ==