// const { ENGINE_METHOD_PKEY_ASN1_METHS } = require("constants");

console.log("I am JS");
// 挑战1 用AJAX请求css
getCss.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "./style.css");
  request.onload = () => {
    console.log("成功了");
    // 创建style标签
    const style = document.createElement("style");
    // 填写style内容
    style.innerHTML = request.response;
    // 插到head里面
    document.head.appendChild(style);
  };
  request.onerror = () => {
    console.log("失败了");
  };
  request.send();
};
//挑战2 用AJAX请求JS
getJs.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "02.js");
  request.onload = () => {
    console.log("js 加载成功", request.response);
    // 创建
    const script = document.createElement("script");
    // 填写
    script.innerHTML = request.response;
    // 插入
    document.body.appendChild(script);
  };
  request.onerror = () => {
    console.log("js 加载失败");
  };
  request.send();
};
//挑战3 用AJAX请求HTML
getHtml.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "02.html");
  request.onload = () => {
    console.log("div 加载成功", request.response);
    // 创建
    const div = document.createElement("div");
    // 填写
    div.innerHTML = request.response;
    // 插入
    document.body.appendChild(div);
  };
  // onerror是先产生的，所以并未很好的兼容AJAX
  request.onerror = () => {
    console.log("div 加载失败");
  };
  request.send();
};

// onload和onerror并未很好的兼容AJAX，所以专业人员一般使用以下方式：
getCss02.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "./02.css");
  request.onreadystatechange = () => {
    console.log(request.readyState);
    console.log(request.status);
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log("成功了");
        // 创建style标签
        const style = document.createElement("style");
        // 填写style内容
        style.innerHTML = request.response;
        // 插到head里面
        document.head.appendChild(style);
      } else {
        alert("加载02css失败");
      }
    }
  };
  request.send();
};
// 挑战4 加载XML
// AJAX全称：Async JavaScript And XML 所以一开始就是为XML而生的，只不过后来JSON替代了XML
// AJAX是浏览器上的功能。浏览器可以发请求，收响应，
//浏览器在window上加了一个XMLHttpRequest函数，用此函数可以构造出一个对象
// JS通过它实现发请求，收响应
getXml.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "./xxx.xml");
  request.onreadystatechange = () => {
    console.log(request.readyState);
    console.log(request.status);
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log("成功了");
        // AJAX对xml非常友好，有单独的函数responseXML，可以自动生成一个DOM对象
        console.log(request.responseXML);
        const dom = request.responseXML;
        const text = dom.getElementsByTagName("waring")[0].textContent;
        console.log(text);
      } else {
        alert("加载xml失败");
      }
    }
  };
  request.send();
};

// 挑战5 加载JSON
// JSON是门独立的标记语言，和HTML同性质 详情可见json.org
getJson.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "./jjj.json");
  request.onreadystatechange = () => {
    console.log(request.readyState);
    console.log(request.status);
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log("成功了");
        // AJAX对xml非常友好，有单独的函数responseXML，可以自动生成一个DOM对象
        console.log(request.response);
        const object = JSON.parse(request.response);
        myName.textContent = object.name;

        // const dom = request.responseXML;
        // const text = dom.getElementsByTagName("waring")[0].textContent;
        // console.log(text);
      } else {
        alert("加载json失败");
      }
    }
  };
  request.send();
};
// 挑战6  加载分页
let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}`);
  request.onreadystatechange = () => {
    console.log(request.readyState);
    console.log(request.status);
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log("成功了");
        // AJAX对xml非常友好，有单独的函数responseXML，可以自动生成一个DOM对象
        console.log(request.response);
        const array = JSON.parse(request.response);
        array.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item.id;
          xxx.appendChild(li);
        });
        // myName.textContent = object.name;

        // const dom = request.responseXML;
        // const text = dom.getElementsByTagName("waring")[0].textContent;
        // console.log(text);
        n += 1;
      } else {
        alert("加载json失败");
      }
    }
  };
  request.send();
};
