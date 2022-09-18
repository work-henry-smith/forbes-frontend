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
    },

    {
        name: 'react-for-beginner-1',
        title: 'React cho người mới bắt đầu phần 1',
        subtitle: 'Cách tạo một ứng dụng từ a-z',
        content: [
            `1. Lời nói đầu`,
            `Hello World. Nhận thấy trong box Lập trình có nhiều anh chị mới bắt đầu ở entry level nên tôi muốn đóng góp một ít công sức để viết ra và chia sẻ. Hôm nay trong loạt series hướng dẫn, tôi sẽ đề cập về những nền tảng React cho người mới bắt đầu React for beginners - Fundamentals. Hy vọng sẽ giúp ích cho những anh chị mới, tìm kiếm sự thành công với mức lương $ 1.000 đầu tiên của mình. Nếu có ích, hãy like và để lại comment.`,
            `2. Tại sao là React?`,
            `Với những anh chị mới chưa biết bắt đầu từ đâu hẳn sẽ có câu hỏi này. Đầu tiên chúng ta sẽ là người tạo ra những trang web và ứng dụng applications. Ví dụ websites: google.com, zing.vn, youtube.com. Ví dụ applications: ứng dụng Vietcombank, game Angry Birds, hay ứng dụng sách nói Fonos. Bên trong những ứng dụng này, chúng ta sẽ quan tâm đến hai phần. Nội dung, giao diện, đường link, hình ảnh, video, icons, etc. Nói chung là những gì show ra trước mặt của chúng ta. Người ta gọi đó là User Interface UI, cũng có thể được gọi là FrontEnd, front nghĩa là phía trước. Có một tảng băng chìm lớn hơn, diễn ra đằng sau khi chúng ta lướt web. Đó có thể là dữ liệu - data chúng ta nhập vào, thông tin đăng nhập mà chúng ta lưu - authentification, phân quyền chúng ta có thể làm gì - authorization. Nói tóm là những gì chạy đằng sau, những gì server làm, còn được gọi là BackEnd. React giải quyết vấn đề đầu tiên, là User Interface.`,
            `Các bạn cũng có thể có câu hỏi, tại sao không dùng Wordpress hoặc những công cụ làm website nhanh chóng, chỉ cần kéo và thả drag-and-drop, tiện lợi, không cần học, đơn giản. Well, React có những thế mạnh như sau. Đầu tiên, hệ thống files theo dạng modulars, có là có thể lắp ghép lại với nhau, người ta gọi là components. Có thể hiểu một component là một chức năng và mình có thể sử dụng lại khi cần thiết, không phải viết lại reusable. Ví dụ: website news.zing.vn có 1.000 bài viết. Nếu sử dụng Wordpress, ta phải code 1.000 files khác nhau và phải code lại từng trang một. Nếu muốn thay đổi, cập nhật, hoặc bảo trì, ta phải làm lần lượt 1.000 files khác nhau. Việc này vô cùng tốn kém thời gian và tiền bạc. Ngược lại, React tạo ra một website tĩnh static website. Các bạn có thể hình dung website là một cái khung frame của một ngôi nhà, có các trụ components là cố định không đổi. Muốn tạo 1.000 bài viết khác nhau, chỉ đơn giản là thay đổi phần dữ liệu data bên trong, còn cái khung thì giữ nguyên. Việc này tiết kiệm rất nhiều công sức khi muốn chỉnh sửa và bảo trì.`,
            `Để hiểu rõ hơn sự khác biệt giữa React và những công cụ tools làm website đơn giản, kéo và thả, drag-and-drop, anh chị hãy đọc thêm bài viết sau: https://www.mindbowser.com/react-vs-wordpress/`,
            `3. Set up môi trường làm việc (dành cho MacOS)`,
            `- Đầu tiên, anh chị sẽ cần một nơi để viết code gọi là code editor. Người ta đã nghĩ ra nhiều công cụ khác nhau để giúp việc viết code trở nên thoải mái, dễ dàng, và thuận tiện. Một trong số đó là Visual Studio Code được rất nhiều người yêu thích. VS Code là một IDE - Intergrated Development Enviroment, nôm na là một nơi anh chị có thể viết code, chạy thử, chỉnh sữa lỗi fix bugs trên đó. Để tải về và cài đặt, hãy truy cập vào https://code.visualstudio.com/download`,
            `- Tiếp theo, mở Terminal được tích hợp sẵn built-in trong VS Code, sử dụng tổ hợp phím tắt Ctrl+Shift+\`. Terminal kiểu gần giống như hệ điều hành MS-Dos ngày xưa anh chị học, là nơi để thực thi một số lệnh đơn giản ví dụ như cd (change directory) để thay đổi vị trí thư mục, ls để liệt kê file, mkdir (make directory) để tạo thư mục.`,
            `- Tại Terminal, chúng ta sẽ sử dụng npm (node package manager) để bắt đầu dự án: npx create-react-app {tên ứng dụng} sau đó hit enter. React sẽ tự động tải về và cài đặt một số thư mục để giúp các anh chị code, có thể kể đến là node_modules, public, src, .gitignore, package-lock.json, package.json.`,
            `- Sẽ có một số thư mục directories và files quan trọng, anh chị cần nhớ khi làm việc. Đó là ./public/index.html, ./src/App.js, ./src/App.css, và ./package.json. App.js là root component, là ông tổ của mọi components. Anh chị có thể hình dung đơn giản nó là gốc cây, là nơi khởi thủy của mọi chức năng khác, từ nội dung website, comment, like & upvote cho đến thanh navigation bar. Còn file App.css sẽ đảm nhận vai trò làm đẹp, để trang trí cho page, căn lề chỉnh dòng, font & size và nhiều thứ khác. Nói chung, làm đẹp thì vào App.css, làm chức năng thì vào App.js.`,
            `- Ok, bây giờ chúng ta bắt tay vào xây dựng website từ những viên gạch đầu tiên nào.`
        ]
    }, 

    {
        name: 'react-for-beginner-2',
        title: 'React cho người mới bắt đầu phần 2',
        subtitle: 'Cách tạo một ứng dụng từ a-z',
        content: [
            `4. Xây dựng tính năng`,
            `- Mục tiêu của chúng ta là xây dựng một trang web. Một website thông thường sẽ có trang chủ Home Page, thông tin về chủ website và dịch vụ họ cung cấp About Us, và danh sách những bài viết Articles List. Ok here we go`,
            `- Trong thư mục ./src, chúng ta tạo một thư mục directory tên là ./src/pages. Trong thư mục này, chúng ta sẽ tạo 6 components, là HomePage.js, AboutPage.js, ArticlesListPage.js, ArticlePage.js, article-content.js, và NotFoundPage.js`,
            `- Ok, chúng ta sẽ xây dựng một trang chủ HomePage đơn giản. Anh chị vào file HomePage.js, sử dụng arrow function tạo một chức năng để hiển thị thông tin khi file mẹ App.js gọi về.`,
            `- Xong phần HomePage, anh chị vào App.js để tích hợp import component <HomePage />`,
            `- Tiếp tục ta sẽ xây dựng AboutPage. Những page này chỉ hiển thị thông tin, đơn giản, thường sử dụng heading <h1> <h3> và paragraph <p>. Chúng ta sẽ nhập thông tin về dịch vụ của chúng ta tại đây.`,
            `- Sau khi có hai components là HomePage.js và AboutPage.js rồi, chúng ta muốn export chúng vào root component App.js. Đồng thời, anh chị cũng sẽ muốn hai components này có hai URLs xác định, có thanh Navigation Bar trên đầu của website.`,
            `- Như anh chị có thể thấy trong root component <App.js />, chúng ta có import một component <NavBar />. Chức năng của nó là tạo ra thanh navigation bar, đồng thời cung cấp link để chúng ta có thể dễ truy cập. Hãy tưởng tượng sẽ bất tiện như thế nào nếu khách hàng phải nhập chính xác địa chỉ URL của bài viết. Thay vào đó, chúng ta sẽ sử dụng built-in component của React là Link và Router.`,
            `- Chúng ta đã xong những phần râu ria rồi, giờ anh chị sẽ muốn tạo ra một component để chứa bài viết. Nó giống như một cái ly đựng nước, bài viết 1 khác nội dung bài viết 2, khác bài viết 3. Tuy nhiên, chúng sẽ sử dụng chung một cái khung, một component. Tôi đặt tên cho nó là <ArticlePage />`,
            `- Có một built-in component mà chúng ta dùng là useParams(). Nó sẽ trả về một đối tượng object gồm cặp khóa key và giá trị value của các tham số động từ URLs, cái mà được so sánh bởi <Route path>. Nói nôm na là, mỗi bài viết có một địa chỉ URL duy nhất, và địa chỉ này là một property trong object articles trong file articles-content.js. Nếu URL trên thanh địa chỉ trùng với URL trong file articles-content.js, nó sẽ hiển thị nội dung. Nếu địa chỉ nhập không trùng với bất kỳ URL nào, nó sẽ hiển thị component <NotFoundPage />`,
            `- Component chứa dữ liệu mà tôi dùng có tên là <article-content />. Nó là một array object có một số properties như name - để xác định URL của bài viết, title và subtitle - tương ứng với heading h1 và h3, contents - để chứa nội dung. Nếu muốn dùng URL để so sánh, anh chị chỉ cần dùng lệnh articles.name,...`,
            `- Component <NotFoundPage /> sẽ được sử dụng trong trường hợp URL mà client nhập không match với bất kỳ URL nào trong article-content.js. Anh chị lưu ý là ta luôn export default cuối mỗi component, thì root component <App /> mới import và sử dụng được`,
            `- `
        ]
    }
];

export default articles;