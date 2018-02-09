var android = 0;
var html = 0;
var java = 0;
var nwjs = 0;
var openlayers3 = 0;
var ubuntu = 0;
var thinking = 0;
var total = 0;
var switchStatus = true;

var catalogJson = [{
    "catalog": "Total",
    "href": "#Total",
    "src": "image/total.jpg"
},
{
    "catalog": "Android",
    "href": "#Android",
    "src": "image/android.jpg"
},
{
    "catalog": "HTML",
    "href": "#HTML",
    "src": "image/html.jpg"
},
{
    "catalog": "Java",
    "href": "#Java",
    "src": "image/java.jpg"
},
{
    "catalog": "NW.js",
    "href": "#NW.js",
    "src": "image/nwjs.jpg"
},
{
    "catalog": "Openlayers3",
    "href": "#Openlayers3",
    "src": "image/openlayers3.jpg"
},
{
    "catalog": "Ubuntu",
    "href": "#Ubuntu",
    "src": "image/ubuntu.jpg"
},
{
    "catalog": "Thinking",
    "href": "#Thinking",
    "src": "image/thinking.jpg"
}];

var blogJson = [{
    "title": "Android面试知识点整理",
    "catalog": "Android",
    "keywords": [{
        "keyword": "面试总结"
    }],
    "digest": "本来应该在秋招结束时就将整理出来的知识点发布博客的，结果忘了。好在现在不算晚，给春招的同学一点参考。",
    "date": "2018年02月07日",
    "href": ""
},
{
    "title": "HTML中保留转义字符的方法",
    "catalog": "HTML",
    "keywords": [{
        "keyword": "转义字符"
    },
    {
        "keyword": "solution"
    }],
    "digest": "HTML中形如 &nbps;(空格) 、 &lt;(<符号) 、 &gt;(>符号) 等都会被转义成对应的值，那么要想保留转义字符本身，比如在贴代码或者教学中，只有破坏转义字符本身的结构，即：将 & 符号再次转义。",
    "date": "2018年02月07日",
    "href": ""
},
{
    "title": "HTML的<pre>标签中嵌套HTML标签时被解析的解决方案",
    "catalog": "HTML",
    "keywords": [{
        "keyword": "转义字符"
    },
    {
        "keyword": "solution"
    }],
    "digest": "<pre>标签中保留空格和换行，常用来展示代码片段，但如果直接嵌套HTML标签，会被浏览器解析，所以需要使用转义字符将代码片段转换为不被解析的文本。",
    "date": "2018年02月07日",
    "href": ""
},
{
    "title": "Ubuntu下使用Thunderbird收发QQ邮箱",
    "catalog": "Ubuntu",
    "keywords": [{
        "keyword": "thunderbird"
    },
    {
        "keyword": "email"
    }],
    "digest": "Ubuntu下使用Thunderbird收发QQ邮箱。",
    "date": "2018年01月29日",
    "href": ""
},
{
    "title": "Ubuntu设置系统环境变量",
    "catalog": "Ubuntu",
    "keywords": [{
        "keyword": "环境变量"
    }],
    "digest": "以设置java环境变量为例。",
    "date": "2018年01月18日",
    "href": ""
},
{
    "title": "Ubuntu更新软件时报\"http://cn.archive.ubuntu.com/ubuntu\"相关错误的解决方案",
    "catalog": "Ubuntu",
    "keywords": [{
        "keyword": "solution"
    }],
    "digest": "Ubuntu更新软件时报\"http://cn.archive.ubuntu.com/ubuntu\"相关错误的解决方案。",
    "date": "2018年01月18日",
    "href": ""
},
{
    "title": "Ubuntu环境下使用NW.js对web应用封装",
    "catalog": "NW.js",
    "keywords": [{
        "keyword": "ubuntu"
    },
    {
        "keyword": "hybrid app"
    }],
    "digest": "相对于偏向应用的windows系统，Linux系统更偏向于开发，因此对于依赖Windows应用的人来说，缺了很多常用软件会很不习惯，本文的目的便是通过两个Demo来引出后面的教程——通过NW.js来封装你想要的Web应用。以Ubuntu 16.04为例（14.04可能无法兼容部分依赖）。",
    "date": "2018年01月17日",
    "href": ""
},
{
    "title": "Ubuntu升级到16.04后出现\"Failed to start Load Kernel Modules\"问题的解决方案",
    "catalog": "Ubuntu",
    "keywords": [{
        "keyword": "solution"
    },
    {
        "keyword": "16.04 LTS"
    }],
    "digest": "转自：http://blog.csdn.net/hello_java_android/article/details/54091293。",
    "date": "2018年01月16日",
    "href": ""
},
{
    "title": "Ubuntu\"无法连接到 Upstart: Failed to connect to socket /com/ubuntu/upstart: 拒绝连接\"的解决方案",
    "catalog": "Ubuntu",
    "keywords": [{
        "keyword": "solution"
    },
    {
        "keyword": "16.04 LTS"
    }],
    "digest": "今天从14.04升级到16.04后出现了这个问题。",
    "date": "2018年01月16日",
    "href": ""
},
{
    "title": "大四秋招总结",
    "catalog": "Thinking",
    "keywords": [{
        "keyword": "秋招总结"
    },
    {
        "keyword": "面试经验"
    }],
    "digest": "经历秋招，才知道找工作多么难，竞争多么激烈，现实多么残酷。当然，如果你足够优秀，这些问题都不存在的。尽管秋招已经快收尾了，但是对于明年春招和今后秋招的同学，也算是一个参考吧。",
    "date": "2017年10月10日",
    "href": ""
},
{
    "title": "学习笔记",
    "catalog": "Java",
    "keywords": [{
        "keyword": "笔记"
    }],
    "digest": "本文记录一些学习过程中觉得重要的笔记，不定期更新扩充。如有错误，欢迎指正。",
    "date": "2017年08月27日",
    "href": ""
},
{
    "title": "Android四种常用的消息传递机制/模式的比较",
    "catalog": "Android",
    "keywords": [{
        "keyword": "通信机制"
    },
    {
        "keyword": "callback interface"
    },
    {
        "keyword": "handler-message"
    },
    {
        "keyword": "broadcast receiver"
    },
    {
        "keyword": "observer-subject"
    }],
    "digest": "四种分别是callback interface，handler-message，broadcast receiver和observer-subject。",
    "date": "2017年07月07日",
    "href": ""
},
{
    "title": "浅谈这半年的实习感想",
    "catalog": "Thinking",
    "keywords": [{
        "keyword": "实习总结"
    }],
    "digest": "写这篇文章，一是作为这半年实习的总结，二是分享自己想说的话。文中观点，小部分参考前人的经验之谈，大部分是自己的心得体会。说得对的，可以借鉴学习，说得错的，可以无视跳过。不局限于IT行业，其他行业也可从中参考部分观点。",
    "date": "2017年07月06日",
    "href": ""
},
{
    "title": "关于jar打包时的几个问题的汇总",
    "catalog": "Java",
    "keywords": [{
        "keyword": "jar"
    },
    {
        "keyword": "solution"
    }],
    "digest": "关于jar打包时的几个问题的汇总：读文件、中文乱码、找不到文件、资源文件位置。",
    "date": "2017年05月24日",
    "href": ""
},
{
    "title": "Openlayers3学习心得之LineString",
    "catalog": "Openlayers3",
    "keywords": [{
        "keyword": "linestring"
    },
    {
        "keyword": "gis"
    }],
    "digest": "关于LineString，官方的示例给的是鼠标画点，自动连线，并添加箭头（LineString Arrows示例），而在我们实际应用中，往往需要手动录入标记点，然后进行连线并添加箭头，下面就分享我使用LineString的过程。",
    "date": "2017年04月26日",
    "href": ""
},
{
    "title": "Openlayers3学习心得之Cluster",
    "catalog": "Openlayers3",
    "keywords": [{
        "keyword": "cluster"
    },
    {
        "keyword": "gis"
    }],
    "digest": "最近在学习开源地图引擎——Openlayers3，将自己的一些学习心得分享出来，第一次写文章，望支持。",
    "date": "2017年04月26日",
    "href": ""
}];

function initBlog(type) {
    var rightcontent = document.getElementById('rightcontent');

    for (var i = 0; i < blogJson.length; i++) {
        calcBlogNum(blogJson[i].catalog);

        if (type == 'Total') {} else if (type != blogJson[i].catalog) {
            continue;
        }
        var a = document.createElement('a');
        a.setAttribute('href', blogJson[i].href);

        var blog_item = document.createElement('div');
        blog_item.setAttribute('class', 'blog_item');

        var b_title = document.createElement('b');
        b_title.setAttribute('class', 'item_parent b_title');

        var title = document.createTextNode(blogJson[i].title);
        b_title.appendChild(title);

        var div_temp = document.createElement('div');

        var em_catalog = document.createElement('em');
        em_catalog.setAttribute('class', 'item_parent em_catalog');
            
        var catalog = document.createTextNode(blogJson[i].catalog);
        em_catalog.appendChild(catalog);
        div_temp.appendChild(em_catalog);

        var keywordJson = blogJson[i].keywords;

        for (var j = 0; j < keywordJson.length; j++) {
            var div_keyword = document.createElement('div');
            div_keyword.setAttribute('class', 'item_parent div_keyword');
            var keyword = document.createTextNode(keywordJson[j].keyword);
            div_keyword.appendChild(keyword);
            div_temp.appendChild(div_keyword);
        }

        var div_digest = document.createElement('div');
        div_digest.setAttribute('class', 'item_parent div_digest');
        var digest = document.createTextNode(blogJson[i].digest);
        div_digest.appendChild(digest);

        var div_date = document.createElement('div');
        div_date.setAttribute('class', 'item_parent div_date');
        var date = document.createTextNode(blogJson[i].date);
        div_date.appendChild(date);

        blog_item.appendChild(b_title);
        blog_item.appendChild(div_temp);
        blog_item.appendChild(div_digest);
        blog_item.appendChild(div_date);
        a.appendChild(blog_item);
        rightcontent.appendChild(a);
    }
}

function initCatalog(type) {
    var leftnav = document.getElementById('leftnav');

    for (var i = 0; i < catalogJson.length; i++) {
        var li = document.createElement('li');

        var a = document.createElement('a');
        a.setAttribute('href', catalogJson[i].href);

        var img = document.createElement('img');
        img.setAttribute('class', 'img_logo');
        img.setAttribute('src', catalogJson[i].src);

        var b = document.createElement('b');
        b.setAttribute('class', 'img_tag');

        var text = catalogJson[i].catalog + ' (' + getBlogNum(catalogJson[i].catalog) + ')';
        var tag = document.createTextNode(text);

        b.appendChild(tag);
        a.appendChild(img);
        a.appendChild(b);
        li.appendChild(a);
        leftnav.appendChild(li);
    }
}

function calcAllBlogNum() {
    for (var i = 0; i < blogJson.length; i++) {
        calcBlogNum(blogJson[i].catalog);
    }
}

function calcBlogNum(type) {
    switch (type) {
    case 'Android':
        android++;
        break;
    case 'HTML':
        html++;
        break;
    case 'Java':
        java++;
        break;
    case 'NW.js':
        nwjs++;
        break;
    case 'Openlayers3':
        openlayers3++;
        break;
    case 'Ubuntu':
        ubuntu++;
        break;
    case 'Thinking':
        thinking++;
        break;
    default:
        break;
    }
    total++;
}

function getBlogNum(type) {
    switch (type) {
    case 'Total':
        return total;
    case 'Android':
        return android;
    case 'HTML':
        return html;
    case 'Java':
        return java;
    case 'NW.js':
        return nwjs;
    case 'Openlayers3':
        return openlayers3;
    case 'Ubuntu':
        return ubuntu;
    case 'Thinking':
        return thinking;
    default:
        return 0;
    }
}

function switchBtn() {
    if (switchStatus) {
        switchOff();
        switchStatus = false;
    } else {
        switchOn();
        switchStatus = true;
    }
}

function switchOff() {
    document.getElementById('leftnav').style = "width: 50px;";
    document.getElementById('rightcontent').style = "margin-left: 50px;";
    document.getElementById('switch').innerHTML = "+";
}

function switchOn() {
    document.getElementById('leftnav').style = "width: 200px;";
    document.getElementById('rightcontent').style = "margin-left: 200px;";
    document.getElementById('switch').innerHTML = "-";
}
