<!--
 * @Author: wangzy
 * @Date: 2022-04-24 13:49:19
 * @LastEditors: wangzy
 * @LastEditTime: 2022-04-26 14:09:47
 * @Description: 
-->
  ## 抽象工厂

  大家知道一部智能手机的基本组成是操作系统 和 硬件。所以说如果我要开一个山寨手机工厂，那我这个工厂里必须是既准备好了操作系统，也准备好了硬件，才能实现手机的量产。考虑到操作系统和硬件这两眼东西背后也存在不同的厂商，
  而且我现在 并不知道我下一个生产线到底具体想生产一台什么样的手机，我只知道手机必须有这两部分组成，所以我先来一个抽象类来约定朱这台手机的基本组成：
  

  