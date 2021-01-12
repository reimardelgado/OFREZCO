/**
 * Helpers Functions
 */
import moment from "moment";

export function bodyScript(src) {
  if(document.querySelector("script[src='" + src + "']")){ return; }
  let script = document.createElement('script');
  script.setAttribute('src', src);
  script.setAttribute('type', 'text/javascript');
  document.body.appendChild(script)
  return true;
}

function toArrayBuffer(buf) {
  var ab = new ArrayBuffer(buf.length);
  var view = new Uint8Array(ab);
  for (var i = 0; i < buf.length; ++i) {
    view[i] = buf[i];
  }
  return ab;
}

export function downloadEXCEL(data, name) {
  let arrayBuffer;
  if (data.byteLength) {
    arrayBuffer = data;
  } else {
    arrayBuffer = toArrayBuffer(data);
  }
  let blob = new Blob([arrayBuffer], {
    type: "application/vnd.ms-excel"
  });
  let link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = name;
  link.click();
}

export function downloadPDF(arrayBuffer, name) {
  let blob = new Blob([arrayBuffer], {
    type: "application/pdf"
  });
  let link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  var newTab = true;
  
  link.download = name;
    var anchor = document.createElement('a');
    anchor.href = link.href;
    if (newTab)
      anchor.target = '_blank';

  //anchor.click();
  link.click();
}

// convert file to binary
export function convertDataURIToBinary(dataURI) {
  var BASE64_MARKER = ';base64,';
  var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
  var base64 = dataURI.substring(base64Index);
  var raw = window.atob(base64);
  var rawLength = raw.length;
  var array = new Uint8Array(new ArrayBuffer(rawLength));

  for (var i = 0; i < rawLength; i++) {
    array[i] = raw.charCodeAt(i);
  }
  return Array.from(array);
}

// convert file to binary 2
export function convertFileToBinary(file, completion) {  
  if(!file || file == null || file == undefined){
    completion([]);
    return;
  }
  let reader = new FileReader();
  reader.readAsArrayBuffer(file);
    reader.onload = function () {
      //console.log(reader.result);
      let arrayBuffer = reader.result
      let bytes = new Uint8Array(arrayBuffer);     
      completion(Array.from(bytes));
    }
}

//Format Date
export function typeIdentification(identification) {
  if (identification.length === 13 && (identification.charAt(2) === '6' || identification.charAt(2) === '9')) {
    return 'J';
  } else {
    return 'N';
  }
}

//Format Date
export function nzDateHour(dt) {
  if (dt) {
    return moment(dt).format("HH:mm");
  }
}

//Format Date
export function nzDate(dt) {
  if (dt) {
    return moment(dt).format("DD/MM/YYYY HH:mm");
  }
}

// Get Date
export function getDate(dateStr, format) {
  let formatDate = format ? format : "MM-DD-YYYY";
  return moment(dateStr, formatDate).toDate();
}

// Convert Date To Timestamp
export function convertDateToTimeStamp(date, format) {
  let formatDate = format ? format : "YYYY-MM-DD";
  return moment(date, formatDate).unix();
}

// Convert Date To fromNow
export function convertDateToFromNow(date) {
  return moment(date).fromNow();
}

// Convert Date To Timestamp
export function convertDateToObj(date, time) {
  let dateObj = new Date(date);
  const hours = time.match(/^(\d+)/)[1];
  const minutes = time.match(/:(\d+)/)[1];
  dateObj.setHours(hours);
  dateObj.setMinutes(minutes);
  return dateObj;
}

/**
 * Text Truncate
 */
export function textTruncate(str, length, ending) {
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = "...";
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
}

/**
 * Function to print log
 */
export function log(tag, msg) {
    console.log(tag, msg);
}

/**
 * Function to get domain to mail
 */
export function getDomainFromEmail(email) {
  try{
    return email.split('@')[1];
  }catch{
    return "";
  }
}

/**
 * Function to convert hex to rgba
 */
export function hexToRgbA(hex, alpha) {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return (
      "rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
      "," +
      alpha +
      ")"
    );
  }
  throw new Error("Bad Hex");
}

/**
 * Function to return currenr app layout
 */
export function getCurrentAppLayout(router) {
  let location = router.history.current.fullPath;
  let path = location.split("/");
  return path[1];
}

import Vue from "vue";
import {
  i18n
} from "@/main";


export function getI18nMsg(msg) {
  const msgI18n = i18n.t("message['" + msg + "']");
  return msgI18n.startsWith("message['") ? msg : msgI18n;
}

export function notifyError(res) {
  if (res.data.error === 0) {
    return false;
  }

  let title = i18n.t("message['" + res.data.msg + "']");
  let text = "";
  if (res.data.error === 105) {
    text = errorsI18n(res.data.data);
  }

  Vue.notify({
    group: "aps",
    type: "error",
    title: title,
    text: text
  });
  return true;
}

function errorsI18n(errors) {
  let error = "";
  errors.forEach(err => {
    const errorI18n = i18n.t("message['" + err + "']");
    if (errorI18n.startsWith("message[")) {
      error += err + "</br>";
    } else {
      error += errorI18n + "</br>";
    }
  });

  return error;
}

