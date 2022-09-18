const articles = [
    {
        name: 'y-kien',
        title: 'Ý kiến bạn đọc',
        subtitle: `Những bên bán hàng thứ ba của Amazon`,
        content: [
            `Tiêu đề "Kiếm triệu đô từ tỉ đô của Bezos" trên số báo tháng 4.2021 đã gây tò mò. Bức tranh về thị trường thương mại điện tử lớn nhất thế giới, nơi không chỉ có quy mô thị trường và khối lượng sản phẩm giao dịch mang lại giá trị lợi nhuận, mà khi nó đạt đến một quy mô nhất định thì ngay chính sự khai thác trong quá trình của chuỗi cung ứng cũng có thể kiếm ra bộn tiền. Những người có lợi là người tiên phong áp dụng công nghệ và phần mềm để quản lý và tối ưu quy trình vận hành và giao dịch, cũng như các phương thức của marketing hiện đại phát huy hiệu quả khi tăng lượng khách hàng tương tác.`,
            `Cách mạng công nghiệp 4.0 đã sản sinh nhiều khái niệm mới như biến Google, Twitter thành những động từ, thì nay khái niệm “bất động sản kỹ thuật số" để chỉ sự mua bán không gian trên các nền tảng thương mại điện tử đang mang lại siêu lợi nhuận. Hiện tượng này xuất hiện trong vòng bốn, năm năm trở lại đây trên để chế thương mại lớn nhất thế giới Amazon của Bezos, đặc biệt là từ sau đại dịch COVID-19.`,
            `Những người tiêu dùng trẻ tại Việt Nam đang có xu hướng tiêu dùng online, lựa chọn mua sắm trên Shoppee, Tiki, Lazada thay thế cho chợ và siêu thị truyền thống, và dân bớt sử dụng tiền mặt cũng sẽ là mảnh đất đầy hứa hẹn cho những nhà đầu tư tìm kiếm những cơ hội kiếm tiền tuyệt vời này. Tuy nhiên, với quy mô thị trường chưa đạt tới mức tối ưu cũng như các nhà bán lẻ thứ ba trên các nền tảng điện tử chủ yếu là cá nhân và hộ gia đình tiểu thương như của Việt Nam hiện tại vẫn chưa thời điểm đủ độ chín để sinh ra những “hiệp sĩ trắng” Thrasio như vậy.`,
            `Lê My Khuyên, giảng viên khoa Tài Chính, ĐH Ngân hàng TP.HCM`
        ]
    },

    {
        name: 'thu-toa-soan',
        title: 'Thư tòa soạn',
        subtitle: `Dấu ấn vô hình`,
        content: [
            `Trong danh sách 2.755 tỉ phú do Forbes công bố năm 2022, có khoảng 120 vị tỉ phú có 90 pháp nhân doanh nghiệp đăng ký hoạt động theo pháp luật Việt Nam. Các công ty này tập trung chủ yếu trong ba lĩnh vực công nghệ, sản xuất, thực phẩm. Cơ cấu như vậy cũng phù hợp với dòng chảy FDI vào Việt Nam.`,
            `Các doanh nghiệp kể trên cũng như khối FDI nói chung giữ vai trò quan trọng trong sự phát triển của nền kinh tế Việt Nam. Trong các mặt hàng dẫn đầu về giá trị kim ngạch xuất khẩu, một số do doanh nghiệp FDI đóng vai trò chủ chốt như xuất khẩu điện tử, điện thoại và linh kiện.`,
            `Ảnh hưởng tích cực từ dòng vốn đầu tư của 90 doanh nghiệp do các tỉ phú sở hữu nói riêng và doanh nghiệp FDI nói chung là tạo công ăn việc làm, nghĩa vụ thuế với nhà nước, hay đóng góp vào tăng trưởng kim ngạch xuất khẩu cho nền kinh tế Việt Nam. Những tác động như vậy đều được thể hiện qua các số liệu thống kê nên dễ nhận biết. Có những đóng góp khác khó có thể đo lường, đánh giá bằng số liệu.`,
            `Đóng góp quan trọng đầu tiên là thúc đẩy sự hoàn thiện môi trường pháp lý, thể chế, tuân thủ luật lệ, quy định quốc tế. Sự góp mặt của doanh nghiệp đến từ các châu lục, đa văn hóa, mang lại sức sống cho nền kinh tế khi tồn tại và phát triển dựa trên nguyên tắc cạnh tranh công bằng, bình đẳng. Việc xây dựng chuỗi giá trị khép kín của C.P Việt Nam, thay đổi tư duy và cách thức canh tác, tiêu dùng sản phẩm nông nghiệp là trường hợp điển cứu cho doanh nghiệp trong nước. Có một số dẫn chứng tốt từ doanh nghiệp FDI trong thực thi trách nhiệm xã hội doanh nghiệp, quan tâm tới môi trường mà câu chuyện về Heineken là điển hình, để cộng đồng doanh nghiệp suy nghĩ và hành động.`,
            `Không ai có thể phủ nhận vai trò sếu đầu đàn của một số doanh nghiệp FDI, đặc biệt ở lĩnh vực công nghệ, trong thu hút đầu tư vào Việt Nam. Những thương hiệu cần kể đến gồm Nidec, Intel, Samsung hay LG. Sự xuất hiện và gia tăng dòng vốn từ các doanh nghiệp đầu ngành này, theo thời gian, kéo theo sự xuất hiện các doanh nghiệp phụ trợ, cung ứng linh kiện của nước ngoài lẫn trong nước. Đó là tiền đề cho việc xây dựng các cụm liên kết trong công nghệ cao.`,
            `Câu chuyện của Intel không dừng lại ở vai trò đưa Việt Nam có tên trên bản đồ công nghệ thế giới, mà còn là minh chứng cho sự thành công trong đào tạo, phát triển nguồn nhân lực có chất lượng. Họ không chỉ đào tạo cho mục tiêu sử dụng nội bộ, mà còn thúc đẩy giáo dục - đào tạo đạt chuẩn của khu vực và quốc tế. Tác động vào cỗ máy giáo dục - đào tạo về lâu dài sẽ góp phần thực hiện các mục tiêu phát triển được lãnh đạo đất nước xây dựng trong tàm nhìn 2045: Việt Nam trở thành nước công nghiệp, phát triển theo hướng bền vững, thân thiện môi trường.`
        ]
    },

    {
        name: 'cp-viet-nam',
        title: 'C.P Việt Nam',
        subtitle: `Khát vọng nhà bếp thế giới`,
        content: [
            `Nhân chuyến công du Thái Lan đầu những năm 1990, một lãnh đạo cấp cao nhà nước Việt Nam ghé thăm nhà máy C.P sản xuất sản phẩm xuất khẩu sang Nhật Bản, ngỏ ý mời C.P mở nhà máy tương tự tại Việt Nam. Việt Nam lúc bấy giờ chủ yếu vẫn nuôi heo quy mô nhỏ, gà thả trong vườn. Gần ba thập niên sau, cuối tháng 12.2020, C.P khai trương nhà máy hiện đại nhất thế giới của họ tại Bình Phước, xuất lô thịt gà made in Việt Nam đầu tiên sang Hong Kong, sau đó tới Nhật Bản, châu Âu. Ngày khai trương, ông Montri Suwanposri, tổng giám đốc công ty cổ phần Chăn nuôi C.P Việt Nam nói với các lãnh đạo cấp cao trong nước: “C.P muốn đưa Việt Nam gia nhập vào bản đồ xuất khẩu thịt gia cầm có thương hiệu trên thế giới”.`,
            `Nhà máy tại Bình Phước là 1 trong 16 nhà máy tại Việt Nam của công ty có sản lượng thức ăn chăn nuôi lớn nhất thế giới, theo thống kê của Watt Global Media. Đây cũng là nhà máy khép kín từ thức ăn chăn nuôi (Feed) - trang trại chăn nuôi (Farm) đến chế biến thực phẩm (Food). Vào Việt Nam từ năm 1988, đến nay công ty của tỉ phú Dhanin Chearavanont - người sở hữu khối tài sản 18,1 tỉ đô la Mỹ theo xếp hạng của Forbes, đã nắm giữ 20% thị phần thức ăn chăn nuôi và 15% sản lượng thịt từ các trang trại tại Việt Nam, theo ước tính riêng của C.P. Thị trường Việt Nam mang về 18% doanh thu cho C.P năm ngoái. Vị thế dẫn đầu thị trường của họ tạo ra những tác động đáng kể, làm thay đổi ngành chăn nuôi Việt Nam. Tham vọng kế tiếp của C.P: trở thành nhà bếp của thế giới từ các nguyên liệu tại Việt Nam.`,
            `Theo báo cáo thường niên của C.P năm 2020, Việt Nam là 1 trong 15 quốc gia tập đoàn Thái Lan đầu tư trang trại và nhà máy chế biến; 1 trong 11 quốc gia công ty có nhà máy thức ăn chăn nuôi. Công ty của tỉ phú Dhanin Chearatanat có nhiều pháp nhân tại Việt Nam: C.P Việt Nam có vốn điều lệ 9.188 tỉ đồng chuyên sản xuất và kinh doanh thức ăn chăn nuôi, trang trại và nhà máy chế biến thực phẩm; công ty CPV Ford về trang trại và chế biến thức ăn có vốn điều lệ 1.073 tỉ đóng. C.P đóng thời sở hữu công ty cổ phần AHM Lifestyles - Creative Hospitality trong lĩnh vực nhà hàng. Họ cũng mở chuỗi cửa hàng Five Stars bán thức ăn nhanh, nhà hàng thương hiệu Chickita chế biến gà thả vườn từ nông trại ở Bình Phước và nhà hàng phong cách Trung Hoa Wan Chai tại Việt Nam.`,
            `Năm 1993, Montri Suwanposri, kế toán trẻ sinh sống ở tỉnh có nhiều người Việt tại Thái, nhận đề nghị của đồng nghiệp tìm giúp họ giám đốc tài chính cho nhà máy của C.P tại Việt Nam. Người tuyển dụng lưỡng lự nhìn Montri một lát rồi nói: “Hay là em đi đi”. Montri bối rối vì anh không hiểu nhiều về đất nước còn bị cấm vận kinh tế. Thế nhưng, 28 năm sau, chàng kế toán giờ đang quản lý gần 30 ngàn nhân viên người Việt ngồi trong căng tin nhà máy bài trí lãng mạn như một quán cà phê, các cánh hoa baby trắng điểm xuyết khắp nơi, nói tiếng Việt rất rõ ràng: “Đây là nhà máy hiện đại nhất thế giới của C.P, hơn cả công ty mẹ ở Thái Lan”. Giống các lãnh đạo người Thái khác tại Việt Nam, Montri được khuyến khích học tiếng Việt để hiểu người bản địa.`,
        ]
    }
];

export default articles;