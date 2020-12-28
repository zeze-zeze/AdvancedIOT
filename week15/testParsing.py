#This 檔案 uses UTF-8 #parsing input LINE example, by tsaiwn@cs.nctu.edu.tw
#  coding=utf-8
import re
def showData( ):
   print("current R=", r, ",G=", g, ",B=", b, ",LUM=", Luminance)
def myInt(tmp):
   try:
     ans = int(tmp);
   except:  #ignore the exception
     ans = 0
   return ans

Luminance = 255; r = g = b = 123;
def parse(what):
  global cmd, r, g, b, Luminance, lum
  what += ["-1", "-1", "-1", "-1"]  # append for missing argument
  (cmd, haha, *_) = what   # Luminance value
  cmd = cmd.upper( )
  if cmd[0] == "Q" or cmd[0] == "E": return
  if cmd[0] == "S": return;
  if cmd[0] == "L":
     Luminance = myInt(haha);
     if Luminance < 0: Luminance = 198;  #  no data
  elif cmd[0] == "C":  # Color r, g, b, brightness
     (cmd2, r, g, b, lum, *_) = what
     r=myInt(r); g=myInt(g);  b=myInt(b);  # ignore exception
     if (r < 0): r= 102;  # no data
     if g < 0: g=153;
     if b < 0: b=153;
     lum=myInt(lum);  # Lum NOT specified if got -1
     if lum >= 0: Luminance = lum
  #end of function parse
print("start r=", r, ",g=", g, ",b=", b,",L=", Luminance)
while(True):
  gg = input("Command? ");
  ans = re.split(" ,|, |,| ", gg)
## please try to input: color  55, 168, 33  44  55
  print("Original ans=", ans)

  ans = [ x for x in ans if x]  # remove empty string
  print("new ans=", ans)
  parse(ans);
  if cmd[0] == "Q" or cmd[0] == "E": break;
  if cmd[0] == "S":
     showData( );
     continue;
  if cmd[0] == "L":
     print("cmd=", cmd, "; Luminance=", Luminance)
  elif cmd[0] == "C":
     print("cmd=", cmd, ",R=", r, ",G=", g, ",B=", b, ",LUM=", Luminance)
  else:
     print("Illegal command. Only C / L two commands allowed.")
     print("Please Re-Enter your ", end="");
#while END here
''' 執行後, 試驗輸入以下各列測試:
color 55, 128
co 66,88,99
co  122,  222, 168,  188
co  133  233  , 153
Lum 200
show
lu 111
Lu
co
quit
''' ###  Do NOT remove this LINE
###觀察輸出的結果! 可接受任意空格隔開, 且有逗號沒逗號都可以 !
## 這個範例是準備用來加入到我們 Dummy Device (Ver.2) 的範例
##  ---參見入門手冊內的(五)那大項;
##   因為我們要讓 User 可以有兩個(其實是三個)命令:
##    (a)L 命令輸入亮度值(Luminance)
##    (b)C 命令輸入顏色  R, G, B, [亮度]
## 然後, 每當 User 輸入這兩個命令之一後, 會把輸入的值Push去 IoTtalk Server
## 請注意, C 命令如果沒輸入亮度, 則不要做把亮度 Push 去  Server 的動作
## '''   # Do NOT remove this LINE
##############################################################
