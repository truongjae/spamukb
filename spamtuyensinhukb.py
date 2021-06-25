from requests import get
import random
from random import randint as ri
import base64
#from bs4 import BeautifulSoup as BS
def b64e(s):
    return base64.b64encode(s.encode()).decode()
def main():
	ho = ["Nguyễn ","Trần ","Lê ","Phạm ","Hoàng ","Huỳnh ","Phan ","Vũ ","Võ ","Đặng ","Bùi ","Đỗ ","Hồ ","Ngô ","Dương ","Lý "]
	ten =["Vân","Thị Lan","Thị Anh","Thị Quỳnh","Ngọc Vy","Đức Thành",
	"Văn Thành","Kiều Trang","Văn Hoàng","Như Quỳnh","Huy Hoàng","Oanh"
	,"Văn Hoàng","Duy Kiên","Nhung","Xuân Phước",
	"Văn Quyền","Huấn","Nga","Thị Mai","Loan","Phương Mai","Bảo","Ngọc Bích",
	"Văn Khanh","Duy Khanh","Thị Khuyên","Ngọc Khánh","Văn Khánh","Hải Châu","Huyền","Châu","Hải Châu","Chiến","Minh Chiến","Dũng","Văn Quân","Văn Phúc","Ðức","Văn Hiển","Xuân Khiển",'Hào',"Ðăng",
	"Văn Hải","Thị Ngọc","Linh Giang","Hoài","Thị Hà","Văn Hà","Xuân Hương","Hợp",
	"Thị Hương","Thị Trang","Duy Tuyền","Văn Sơn","Huy","Xuân Thủy","Hùng","Tùng","Lộc","Mạnh","Huệ","Phượng","Thăng","Thắng","Minh Đạt","Văn Tuấn","Trịnh","Hồng Thủy","Thanh Nga","Thanh Thảo","Thảo Minh","Hùng Việt",
	"Cao","Duyên","Thu","Thị Hằng","Trần Mạnh","Đạt Danh","Vinh","Văn Lợi"]
	hoten = str(random.choice(ho)+random.choice(ten))
	dauso=['03','09','08']
	sdt = random.choice(dauso)+str(ri(12345678,98789878))
	khoa = ["Quản trị dịch vụ du lịch và lữ hành",
	"Quản trị kinh doanh ",
	"Luật kinh tế ",
	"Ngôn ngữ Anh ",
	"Công nghệ thông tin ",
	"Kế toán",
	"Tài chính – Ngân hàng",
	"Công nghệ kỹ thuật điện tử – viễn thông",
	"Thiết kế đồ họa",
	"Thiết kế thời trang ",
	"Quản lý nhà nước ",
	"Quản lý xây dựng ",
	"Kiến trúc ",
	"Quản lý kinh tế",
	"Đào tạo trình độ Cử nhân",
	"Đào tạo trình độ Thạc sĩ"]
	url = "http://thankyou.daotaodh.edu.vn/?name="+hoten+"&phone="+b64e(sdt)+"&form_item695="+random.choice(khoa)
	response = get(url)
	# soup = BS(response.content, "html.parser")
	# soup = str(soup)
	# return soup
from time import sleep as s
while True:
	s(0.5)
	try:
		main()
	except:
		pass