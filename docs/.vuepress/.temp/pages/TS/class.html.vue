<template><h1 id="类" tabindex="-1"><a class="header-anchor" href="#类" aria-hidden="true">#</a> 类</h1>
<p>使用class关键字来定义一个类；</p>
<p>我们可以声明一些类的属性：在类的内部声明类的属性以及对应的类型</p>
<ul>
<li>如果类型没有声明，那么它们默认是any的；</li>
<li>我们也可以给属性设置初始化值；</li>
<li>在默认的 strictPropertyInitialization 模式下面我们的属性是必须初始化的，如果没有初始化，那么编译时就会报错；
<ul>
<li>如果我们在 strictPropertyInitialization 模式下确实不希望给属性初始化，可以使用 name!: string语法；</li>
</ul>
</li>
</ul>
<p>类可以有自己的构造函数constructor，当我们通过new关键字创建一个实例时，构造函数会被调用；</p>
<ul>
<li>构造函数不需要返回任何值，默认返回当前创建出来的实例；</li>
</ul>
<p>类中可以有自己的函数，定义的函数称之为方法</p>
<p><img src="@source/.vuepress/public/images/cla.png" alt="图片"></p>
<h2 id="类的继承" tabindex="-1"><a class="header-anchor" href="#类的继承" aria-hidden="true">#</a> 类的继承</h2>
<ul>
<li>面向对象的其中一大特性就是继承，继承不仅仅可以减少我们的代码量，也是多态的使用前提。</li>
<li>使用extends关键字来实现继承，子类中使用super来访问父类。</li>
<li>Student类继承自Person：
<ul>
<li>Student类可以有自己的属性和方法，并且会继承 Person 的属性和方法；</li>
<li>在构造函数中，我们可以通过 super 来调用父类的构造方法，对父类中的属性进行初始化；
<img src="@source/.vuepress/public/images/extends.png" alt="图片"></li>
</ul>
</li>
</ul>
<h2 id="类的成员修饰符" tabindex="-1"><a class="header-anchor" href="#类的成员修饰符" aria-hidden="true">#</a> 类的成员修饰符</h2>
<p>在TypeScript中，类的属性和方法支持三种修饰符： public、private、protected</p>
<ul>
<li>public 修饰的是在任何地方可见、公有的属性或方法，默认编写的属性就是public的；</li>
<li>private 修饰的是仅在同一类中可见、私有的属性或方法；</li>
<li>protected 修饰的是仅在类自身及子类中可见、受保护的属性或方法；</li>
</ul>
<p><img src="@source/.vuepress/public/images/xiushi.png" alt="图片"></p>
<h3 id="只读属性-readonly" tabindex="-1"><a class="header-anchor" href="#只读属性-readonly" aria-hidden="true">#</a> 只读属性 readonly</h3>
<p>如果有一个属性我们不希望外界可以任意的修改，只希望确定值后直接使用，那么可以使用readonly
<img src="@source/.vuepress/public/images/ro.png" alt="图片"></p>
<h2 id="getters-setters" tabindex="-1"><a class="header-anchor" href="#getters-setters" aria-hidden="true">#</a> getters/setters</h2>
<p>在前面一些私有属性是不能直接访问的，或者某些属性我们想要监听它的获取(getter)和设置(setter)的过程，
这个时候我们可以使用存取器
<img src="@source/.vuepress/public/images/getset.png" alt="图片"></p>
<h2 id="静态成员" tabindex="-1"><a class="header-anchor" href="#静态成员" aria-hidden="true">#</a> 静态成员</h2>
<p>前面在类中定义的成员和方法都属于对象级别的, 在开发中, 有时候也需要定义类级别的成员和方法</p>
<ul>
<li>在TypeScript中通过关键字static来定义</li>
</ul>
<p><img src="@source/.vuepress/public/images/jingtai.png" alt="图片"></p>
<h2 id="抽象类-abstract" tabindex="-1"><a class="header-anchor" href="#抽象类-abstract" aria-hidden="true">#</a> 抽象类 abstract</h2>
<p>继承是多态使用的前提</p>
<ul>
<li>所以在定义很多通用的调用接口时, 我们通常会让调用者传入父类，通过多态来实现更加灵活的调用方式。</li>
<li>但是，父类本身可能并不需要对某些方法进行具体的实现，所以父类中定义的方法,，我们可以定义为抽象方法。</li>
</ul>
<p>什么是 抽象方法? 在TypeScript中没有具体实现的方法(没有方法体)，就是抽象方法。</p>
<ul>
<li>抽象方法，必须存在于抽象类中；</li>
<li>抽象类是使用 abstract 声明的类；</li>
</ul>
<p>抽象类有如下的特点：</p>
<ul>
<li>抽象类是不能被实例的话（也就是不能通过new创建）</li>
<li>抽象方法必须被子类实现，否则该类必须是一个抽象类</li>
</ul>
<p><img src="@source/.vuepress/public/images/shape1.png" alt="图片">
<img src="@source/.vuepress/public/images/shape2.png" alt="图片">
<img src="@source/.vuepress/public/images/shape3.png" alt="图片"></p>
<h2 id="类的类型" tabindex="-1"><a class="header-anchor" href="#类的类型" aria-hidden="true">#</a> 类的类型</h2>
<p>类本身也是可以作为一种数据类型的
<img src="@source/.vuepress/public/images/classlei.png" alt="图片"></p>
<h2 id="接口的声明" tabindex="-1"><a class="header-anchor" href="#接口的声明" aria-hidden="true">#</a> 接口的声明</h2>
</template>
