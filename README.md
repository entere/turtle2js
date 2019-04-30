<h1 align="left"><a href="https://entere.github.io/turtle2js">Turtle2js</a></h1>


📦  `JavaScript` 版的 `Turtle` 库，基本可以和 `Python` 的 `Turtle`库功能一致，你在浏览器上，画出和 `Turtle` 一样的图形

## Installation

```shell
$ npm install
$ npm run build

```

## Usage

在代码区写 `Python` 原生的 `Turtle` 代码，点击运行查看绘制效果

示例一：绘制小猪佩奇  [点击查看示例](https://entere.github.io/turtle2js/dist/index.html)

```python
# coding:utf-8
import turtle as t

# 绘制小猪佩奇
#t.screensize(400, 300)
t.pensize(4) # 设置画笔的大小
t.hideturtle()
#t.colormode(255) # 设置GBK颜色范围为0-255

t.pencolor(255, 155, 192) # 设置画笔颜色和
t.fillcolor("pink") # 设置填充颜色(pink)

# t.setup(840,500) # 设置主窗口的大小为840*500
t.speed(10) # 设置画笔速度为10

#鼻子
t.pu() # 提笔
t.goto(-100,100) # 画笔前往坐标(-100,100)
t.pd() # 下笔
t.seth(-30) # 笔的角度为-30°
t.begin_fill() # 外形填充的开始标志
a=0.4
for i in range(120):
   if 0<=i<30 or 60<=i<90:
       a=a+0.08
       t.lt(3) #向左转3度
       t.fd(a) #向前走a的步长
   else:
       a=a-0.08
       t.lt(3)
       t.fd(a)
t.end_fill() # 依据轮廓填充
t.pu() # 提笔
t.seth(90) # 笔的角度为90度
t.fd(25) # 向前移动25
t.seth(0) # 转换画笔的角度为0
t.fd(10)
t.pd()
t.pencolor(255,155,192) # 设置画笔颜色
t.seth(10)
t.begin_fill()
t.circle(5) # 画一个半径为5的圆
t.color(160,82,45) # 设置画笔和填充颜色
t.end_fill()
t.pu()
t.seth(0)
t.fd(20)
t.pd()
t.pencolor(255,155,192)
t.seth(10)
t.begin_fill()
t.circle(5)
t.color(160,82,45)
t.end_fill()

#头
t.pencolor(255, 155, 192) # 设置画笔颜色和
t.fillcolor("pink") # 设置填充颜色(pink)
t.pu()
t.seth(90)
t.fd(41)
t.seth(0)
t.fd(0)
t.pd()
t.begin_fill()
t.seth(180)
t.circle(300,-30) # 顺时针画一个半径为300,圆心角为30°的园
t.circle(100,-60)
t.circle(80,-100)
t.circle(150,-20)
t.circle(60,-95)
t.seth(161)
t.circle(-300,15)
t.pu()
t.goto(-100,100)
t.pd()
t.seth(-30)
a=0.4
for i in range(60):
   if 0<=i<30 or 60<=i<90:
       a=a+0.08
       t.lt(3) #向左转3度
       t.fd(a) #向前走a的步长
   else:
       a=a-0.08
       t.lt(3)
       t.fd(a)
t.end_fill()

#耳朵
t.pencolor(255, 155, 192) # 设置画笔颜色和
t.fillcolor("pink") # 设置填充颜色(pink)
t.pu()
t.seth(90)
t.fd(-7)
t.seth(0)
t.fd(70)
t.pd()
t.begin_fill()
t.seth(100)
t.circle(-50,50)
t.circle(-10,120)
t.circle(-50,54)
t.end_fill()
t.pu()
t.seth(90)
t.fd(-12)
t.seth(0)
t.fd(30)
t.pd()
t.begin_fill()
t.seth(100)
t.circle(-50,50)
t.circle(-10,120)
t.circle(-50,56)
t.end_fill()

#眼睛
t.pencolor(255, 155, 192)
t.fillcolor("white")
t.pu()
t.seth(90)
t.fd(-20)
t.seth(0)
t.fd(-95)
t.pd()
t.begin_fill()
t.circle(15)
t.end_fill()
t.color("black")
t.pu()
t.seth(90)
t.fd(12)
t.seth(0)
t.fd(-3)
t.pd()
t.begin_fill()
t.circle(3)
t.end_fill()
t.pencolor(255, 155, 192)
t.fillcolor("white")
t.pu()
t.seth(90)
t.fd(-25)
t.seth(0)
t.fd(40)
t.pd()
t.begin_fill()
t.circle(15)
t.end_fill()
t.color("black")
t.pu()
t.seth(90)
t.fd(12)
t.seth(0)
t.fd(-3)
t.pd()
t.begin_fill()
t.circle(3)
t.end_fill()

#腮
t.color((255,155,192))
t.pu()
t.seth(90)
t.fd(-95)
t.seth(0)
t.fd(65)
t.pd()
t.begin_fill()
t.circle(30)
t.end_fill()

#嘴
t.color(239,69,19)
t.pu()
t.seth(90)
t.fd(15)
t.seth(0)
t.fd(-100)
t.pd()
t.seth(-80)
t.circle(30,40)
t.circle(40,80)

#身体
#t.color("red",(255,99,71))
t.pencolor(255,99,71)
t.fillcolor("red")
t.pu()
t.seth(90)
t.fd(-20)
t.seth(0)
t.fd(-78)
t.pd()
t.begin_fill()
t.seth(-130)
t.circle(100,10)
t.circle(300,30)
t.seth(0)
t.fd(230)
t.seth(90)
t.circle(300,30)
t.circle(100,3)
#t.color((255,155,192),(255,100,100))
t.pencolor(255,155,192)
t.fillcolor(255,100,100)
t.seth(-135)
t.circle(-80,63)
t.circle(-150,24)
t.end_fill()

#手
t.color((255,155,192))
t.pu()
t.seth(90)
t.fd(-40)
t.seth(0)
t.fd(-27)
t.pd()
t.seth(-160)
t.circle(300,15)
t.pu()
t.seth(90)
t.fd(15)
t.seth(0)
t.fd(0)
t.pd()
t.seth(-10)
t.circle(-20,90)
t.pu()
t.seth(90)
t.fd(30)
t.seth(0)
t.fd(237)
t.pd()
t.seth(-20)
t.circle(-300,15)
t.pu()
t.seth(90)
t.fd(20)
t.seth(0)
t.fd(0)
t.pd()
t.seth(-170)
t.circle(20,90)

#脚
t.pensize(10)
t.color((240,128,128))
t.pu()
t.seth(90)
t.fd(-75)
t.seth(0)
t.fd(-180)
t.pd()
t.seth(-90)
t.fd(40)
t.seth(-180)
t.color("black")
t.pensize(15)
t.fd(20)
t.pensize(10)
t.color((240,128,128))
t.pu()
t.seth(90)
t.fd(40)
t.seth(0)
t.fd(90)
t.pd()
t.seth(-90)
t.fd(40)
t.seth(-180)
t.color("black")
t.pensize(15)
t.fd(20)

#尾巴
t.pensize(4)
t.color((255,155,192))
t.pu()
t.seth(90)
t.fd(70)
t.seth(0)
t.fd(95)
t.pd()
t.seth(0)
t.circle(70,20)
t.circle(10,330)
t.circle(70,30)
t.done()

```


示例二：绘制太阳花 [点击查看示例](https://entere.github.io/turtle2js/dist/index.html)

```python
import turtle as t
import time
t.pencolor("red")

t.speed(10)
t.begin_fill()
for _ in range(50):
    t.forward(200)
    t.left(170)

end_fill()
time.sleep(1)

```


示例三：绘制五角星 [点击查看示例](https://entere.github.io/turtle2js/dist/index.html)

```python
import turtle
import time

turtle.pensize(5)
turtle.pencolor("yellow")
turtle.fillcolor("red")
turtle.begin_fill()

for _ in range(5):
    turtle.forward(200)
    turtle.right(144)
turtle.end_fill()
time.sleep(2)

turtle.penup()
turtle.goto(-150,-120)
turtle.color("violet")
turtle.write("Done", font=('Arial', 40, 'normal'))
time.sleep(1)

```

## License

MIT