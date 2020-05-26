// - 简单工厂模式，又叫静态工厂模式，由一个工厂对象决定创建某一种产品对象类的实例，主要用来创建同一类对象
// 第一个类 篮球
var Basketball = function (){
  this.intro = "篮球盛行于美国"
};
Basketball.prototype = {
  getMember: function(){
    console.log('每个队伍需要5名球员')
  },
  getBallSize: function(){
    console.log('篮球是圆的')
  }
};

var FootBall =  function(){
  this.intro = '中国足球，世界驰名';
};
// 第二个类  足球
FootBall.prototype = {
  getMember: function(){
    console.log('中国足球，远近闻名')
  },
  getBallSize: function(){
    console.log('足球是踢的')
  }
};

// 工厂模式

var sportsFactroy = function(name){
  switch(name){
    case 'NBA':
      return new Basketball();
    case 'worldCup':
      return new FootBall();
  }
}

var football = sportsFactroy('worldCup');
football.getMember();

var basketball = sportsFactroy('NBA');
basketball.getMember();

console.log(sportsFactroy)

