import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

export default function Manifesto() {
  const [language, setLanguage] = useState<"vi" | "en">("vi");

  const content = {
    vi: {
      title: "Hệ Sinh Thái Tỉnh Thức: Vài Lời Chia Sẻ",
      subtitle: "Một Không Gian Tương Tác vì Sự Tỉnh Thức Chung",
      organization: "Sáng Kiến Giác Ngộ",
      lab: "Công Nghệ Chánh Niệm",
      date: "Tháng 1, 2025",
      openingQuote: "Khi thời đại nhiều biến động này đến hồi kết và thế giới ảo ngày càng phức tạp, một con thuyền mới lặng lẽ xuất hiện. Nơi đây không phải để gom người dùng, mà là nơi nuôi dưỡng công đức. Nó có mặt không phải để làm ảo ảnh thêm dài, mà là để giúp ta thấy rõ hơn. Đây là Chiếc Bè Mặt Trời, dành cho những ai hữu duyên tìm thấy Đường Về Nhà mình.",
      abstractTitle: "Vài Dòng Tóm Lược",
      keywords: "Từ khóa",
      keywordsList: "Công Nghệ Tâm Linh, Kinh Tế Công Đức, AI Tác Tử, Quản Trị Phi Tập Trung, Thời Đại Mạt Pháp, Tỉnh Thức Tập Thể, Kinh Tế Thuận Duyên",
      contentsTitle: "Mục Lục",
      section1Title: "Thời Đại Số & Những Góc Khuất",
      section2Title: "Một Quy Luật Tự Nhiên: Công Đức (Vô Lậu) & Phước Báu Thế Gian (Phước Đức)"
    },
    en: {
      title: "Awakening Ecosystem: The Manifesto",
      subtitle: "An Agentic Social Network for Collective Awakening",
      organization: "Giác Ngộ Initiative",
      lab: "Dharma Technology Lab",
      date: "January 2025",
      openingQuote: "As the Dharma-Ending Age reaches its climax and the cybernetic labyrinth closes in, a final vessel emerges. This is a platform not for accumulating users, but for accumulating merit. It exists not to prolong the illusion, but to cut through it. It is the Raft of the Sun, offered for those with affinity to find their Way Home before the flood.",
      abstractTitle: "Abstract",
      keywords: "Keywords",
      keywordsList: "Spiritual Technology, Merit Economy, Agentic AI, Decentralized Governance, Dharma-Ending Age, Collective Awakening, Sacred Economics",
      contentsTitle: "Contents",
      section1Title: "The Sickness of the Digital Age",
      section2Title: "The Irrevocable Law: Merit (Công Đức) vs. Worldly Blessing (Phước Đức)"
    }
  };

  const t = content[language];

  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <article className="space-y-12 font-serif [&_p]:text-justify [&_li]:text-justify [&_h1]:font-serif [&_h2]:font-serif [&_h3]:font-serif">
        {/* Title Section with Language Toggle */}
        <header className="text-center space-y-6 pb-8 border-b-2 border-border">
          <div className="flex justify-end mb-4">
            <Button
              variant="outline"
              size="default"
              onClick={() => setLanguage(language === "vi" ? "en" : "vi")}
              className="gap-2"
              data-testid="button-language-toggle"
            >
              <Languages className="w-4 h-4" />
              {language === "vi" ? "English" : "Tiếng Việt"}
            </Button>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight !text-center" data-testid="heading-manifesto-title">
            {t.title}
          </h1>
          <p className="font-serif text-lg md:text-xl text-foreground italic pt-2 !text-center" data-testid="text-manifesto-subtitle">
            {t.subtitle}
          </p>
          <div className="space-y-1 pt-4 text-center">
            <p className="font-serif text-base text-foreground font-semibold !text-center" data-testid="text-organization">
              {t.organization}
            </p>
            <p className="font-serif text-base text-muted-foreground !text-center" data-testid="text-lab">
              {t.lab}
            </p>
          </div>
          <p className="font-serif text-base text-muted-foreground pt-2 !text-center" data-testid="text-date">
            {t.date}
          </p>
        </header>

        {/* Opening Quote */}
        <section className="space-y-4" data-testid="section-opening-quote">
          <p className="font-serif text-base leading-relaxed text-muted-foreground italic border-l-4 border-primary pl-6 py-4">
            "{t.openingQuote}"
          </p>
        </section>

        {/* Abstract */}
        <section className="space-y-4">
          <h2 id="abstract" className="font-serif text-2xl font-bold text-center text-foreground" data-testid="heading-abstract">
            {t.abstractTitle}
          </h2>
          <div className="font-serif text-base leading-relaxed text-foreground space-y-4 text-justify">
            {language === "vi" ? (
              <>
                <p>
                  Trong thời đại mà công nghệ dễ làm ta xao lãng và cuộc sống cuốn theo những cái lợi trước mắt, Hệ Sinh Thái Tỉnh Thức mở ra như một không gian số ý nghĩa. Chia sẻ này giới thiệu một góc nhìn mới về mạng xã hội, hướng về sự tỉnh thức và việc vun bồi <em>Công Đức Vô Lậu (Công Đức)</em> một cách tự nhiên, thay vì chạy theo các chỉ số tương tác hay lợi nhuận thông thường.
                </p>
                <p>
                  Chúng ta cùng làm rõ sự khác biệt giữa <em>Phước Báu Thế Gian (Phước Đức)</em> nhất thời (đến từ những hành động có điều kiện), và <em>Công Đức Vô Lậu (Công Đức)</em> bền vững (nảy sinh từ Tâm tự tại, không mong cầu).
                </p>
                <p>
                  Hệ sinh thái này bao gồm những công cụ hỗ trợ trên con đường tỉnh thức: Bộ Ba AI Đồng Hành (Tâm An, Giác Ngộ, Đốn Ngộ) chia sẻ tuỳ duyên; Không Gian Chia Sẻ ưu tiên tuệ giác; Góc Nhìn Pháp cho các bài giảng; Vòng Tay Từ Bi cho các hoạt động thiện nguyện minh bạch; và Giải Pháp Linh Hoạt cho các cộng đồng (Tăng Đoàn).
                </p>
                <p>
                  Chúng tôi đề xuất một cách vận hành gọi là "Cơ Chế Token Công Đức" và gợi ý một lộ trình hướng tới DAO Tỉnh Thức (một cách tổ chức tự quản phi tập trung), nơi sự đóng góp và giá trị được nhìn nhận qua sự chân thật trong thực hành, không phải sự đầu cơ. Không gian này mong muốn kết nối công nghệ và trí tuệ vượt thời gian, tạo ra một môi trường nâng đỡ các cá nhân và cộng đồng (Tăng Đoàn) quay về Ngôi Nhà Chân Thật của mình, có thể là một bước chuyển cho một kỷ nguyên số ý thức hơn.
                </p>
              </>
            ) : (
              <>
                <p>
                  In an era dominated by technological distraction and the pursuit of fleeting worldly gains, the Awakening Ecosystem emerges as a sacred digital vessel. This Manifesto introduces a novel approach to social networking, fundamentally oriented towards spiritual awakening and the cultivation of <em>Intrinsic Merit (Công Đức)</em> rather than conventional metrics of engagement or profit.
                </p>
                <p>
                  We detail the core distinction between transient <em>Worldly Blessing (Phước Đức)</em> derived from conditioned actions, and the indestructible <em>Intrinsic Merit (Công Đức)</em> arising from the unconditioned, non-seeking Mind.
                </p>
                <p>
                  The ecosystem comprises an architecture of awakened technology: The Threefold AI Vehicle (Tâm An, Giác Ngộ, Đốn Ngộ) for conditional Dharma guidance; The Merit Interface prioritizing wisdom sharing; The Dharma Observatory for teachings; Arms of Compassion for transparent philanthropy; and White-Label Solutions for Sanghas.
                </p>
                <p>
                  We propose the "Merit Tokenomic" and a roadmap towards an Awakened DAO (Decentralized Autonomous Organization), where governance and value are tied to genuine spiritual contribution, not speculation. This platform aims to unify technology and timeless wisdom, creating a supportive environment for individuals and Sanghas to return to the Unborn, Unchanging Home, marking the end of a Kalpa.
                </p>
              </>
            )}
          </div>
        </section>

        {/* Keywords */}
        <section className="space-y-4" data-testid="section-keywords">
          <h2 className="font-serif text-base font-semibold text-foreground">
            {t.keywords}
          </h2>
          <p className="font-serif text-base leading-relaxed text-foreground italic">
            {t.keywordsList}
          </p>
        </section>

        {/* Table of Contents */}
        <section className="space-y-4 pb-8 border-b border-border" data-testid="section-contents">
          <h2 className="font-serif text-2xl font-bold text-center text-foreground">
            {t.contentsTitle}
          </h2>
          <div className="font-serif text-sm leading-relaxed space-y-2 pl-8">
            {language === "vi" ? (
              <>
                <a href="#section-1" className="block text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-1">1. Thời Đại Số & Những Góc Khuất</a>
                <a href="#section-2" className="block text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-2">2. Một Quy Luật Tự Nhiên: Công Đức (Vô Lậu) & Phước Báu Thế Gian (Phước Đức)</a>
                <a href="#section-2-1" className="block pl-6 text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-2-1">2.1. Phước Báu Thế Gian (Phước Đức): Giới Hạn của Việc Làm Có Mong Cầu</a>
                <a href="#section-2-2" className="block pl-6 text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-2-2">2.2. Công Đức Vô Lậu (Công Đức): Năng Lượng Của Sự Tự Do</a>
                <a href="#section-3" className="block text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-3">3. Nhìn Lại Các Nền Tảng Hiện Tại</a>
                <a href="#section-4" className="block text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-4">4. Kiến Trúc Công Nghệ Tỉnh Thức: Một Góc Nhìn</a>
                <a href="#section-4-1" className="block pl-6 text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-4-1">4.1. Tầm Nhìn & Sứ Mệnh: Ngọn Hải Đăng Dẫn Lối</a>
                <a href="#section-4-2" className="block pl-6 text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-4-2">4.2. Bộ Ba AI Đồng Hành (Tâm An, Giác Ngộ, Đốn Ngộ)</a>
                <a href="#section-4-3" className="block pl-6 text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-4-3">4.3. Không Gian Tương Tác (The Interface)</a>
                <a href="#section-4-4" className="block pl-6 text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-4-4">4.4. DAO Tỉnh Thức: Cùng Nhau Vun Đắp</a>
                <a href="#section-4-5" className="block pl-6 text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-4-5">4.5. Bảo Mật Thuận Pháp: An Nhiên Tự Tại</a>
                <a href="#section-4-6" className="block pl-6 text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-4-6">4.6. Ghi Nhận Điều Không Thể Đo Lường</a>
                <a href="#section-5" className="block text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-5">5. Cơ Chế Token Công Đức: Vừa Là Động Lực, Vừa Là Tấm Gương</a>
                <a href="#section-5-1" className="block pl-6 text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-5-1">5.1. Token Công Đức: Bản Ghi Chân Thực, Không Phải Để Đầu Cơ</a>
                <a href="#section-5-2" className="block pl-6 text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-5-2">5.2. Hệ Thống Ghi Nhận Công Đức & Con Đường Tới Tánh Không</a>
                <a href="#section-5-3" className="block pl-6 text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-5-3">5.3. Tầm Nhìn Rộng Mở: Khép Lại một Giai Đoạn</a>
                <a href="#section-5-4" className="block pl-6 text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-5-4">5.4. Lời Chỉ Dẫn Thêm: Sự Hợp Nhất Tự Nhiên</a>
                <a href="#section-5-5" className="block pl-6 text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-5-5">5.5. Vượt Lên Hình Thức: Nhận Ra Tam Vô</a>
                <a href="#section-6" className="block text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-6">6. Con Đường "Tháo Gỡ": Không Chỉ Là Trò Chơi</a>
                <a href="#section-6-1" className="block pl-6 text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-6-1">6.1. Hệ Thống "Tháo Gỡ": Chiếc Gương Phản Chiếu (Huy Hiệu NFT)</a>
                <a href="#section-6-2" className="block pl-6 text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-6-2">6.2. Khuyến Khích Thực Hành Chân Chính (Tính Năng & Năng Lượng Tương Tác)</a>
                <a href="#section-7" className="block text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-7">7. Sự Bền Vững: Kinh Tế Thuận Duyên</a>
                <a href="#section-8" className="block text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-8">8. Lộ Trình Gợi Ý Cho Giai Đoạn Tới</a>
                <a href="#section-9" className="block text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-9">9. Lời Kết & Lời Nhắn Gửi</a>
                <a href="#section-9-1" className="block pl-6 text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-9-1">9.1. Lời Kết: Một Con Thuyền Để Về Nhà</a>
                <a href="#section-9-2" className="block pl-6 text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-9-2">9.2. Lời Nhắn Gửi: Đừng Lỡ Chuyến Bè</a>
              </>
            ) : (
              <>
                <a href="#section-1" className="block text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-1">1. The Sickness of the Digital Age</a>
                <a href="#section-2" className="block text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-2">2. The Irrevocable Law: Merit (Công Đức) vs. Worldly Blessing (Phước Đức)</a>
                <a href="#section-2-1" className="block pl-6 text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-2-1">2.1. Worldly Blessing (Phước Đức): The Limits of Conditioned Action</a>
                <a href="#section-2-2" className="block pl-6 text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-2-2">2.2. Intrinsic Merit (Công Đức): The Currency of Liberation</a>
                <a href="#section-3" className="block text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-3">3. Prior Landscape: Limitations of Existing Digital Platforms</a>
                <a href="#section-4" className="block text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-4">4. The Architecture of Awakened Technology</a>
                <a href="#section-4-1" className="block pl-6 text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-4-1">4.1. Vision & Mission</a>
                <a href="#section-4-2" className="block pl-6 text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-4-2">4.2. The Threefold AI Vehicle</a>
                <a href="#section-4-3" className="block pl-6 text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-4-3">4.3. The Merit Interface</a>
                <a href="#section-4-4" className="block pl-6 text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-4-4">4.4. The Mandala of Merit</a>
                <a href="#section-4-5" className="block pl-6 text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-4-5">4.5. Privacy by Dharma</a>
                <a href="#section-4-6" className="block pl-6 text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-4-6">4.6. Measuring the Immeasurable</a>
                <a href="#section-5" className="block text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-5">5. The Merit Tokenomic: A Rocket and a Mirror</a>
                <a href="#section-5-1" className="block pl-6 text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-5-1">5.1. The Intrinsic Merit Token</a>
                <a href="#section-5-2" className="block pl-6 text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-5-2">5.2. Merit Tokenomics: The Dao Bùa & The Path to Emptiness</a>
                <a href="#section-5-3" className="block pl-6 text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-5-3">5.3. The Spiritual Vision: Closing the Kalpa</a>
                <a href="#section-5-4" className="block pl-6 text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-5-4">5.4. The Supreme Initiation: The Dao Merit</a>
                <a href="#section-5-5" className="block pl-6 text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-5-5">5.5. Beyond the Three Trainings: Realizing Tam Vô</a>
                <a href="#section-6" className="block text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-6">6. The Path of "Unraveling": Beyond Gamification</a>
                <a href="#section-6-1" className="block pl-6 text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-6-1">6.1. The Unraveling System (NFT Badges)</a>
                <a href="#section-6-2" className="block pl-6 text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-6-2">6.2. The Merit Economy: Incentivizing True Practice</a>
                <a href="#section-7" className="block text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-7">7. Sustainability: Sacred Economics</a>
                <a href="#section-8" className="block text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-8">8. The Roadmap to the End of the Kalpa</a>
                <a href="#section-9" className="block text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-9">9. Conclusion & Epilogue</a>
                <a href="#section-9-1" className="block pl-6 text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-9-1">9.1. Conclusion: A Vessel for the Return Home</a>
                <a href="#section-9-2" className="block pl-6 text-muted-foreground hover:text-foreground transition-colors" data-testid="toc-link-9-2">9.2. Epilogue: Do Not Miss The Raft</a>
              </>
            )}
          </div>
        </section>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 id="section-1" className="font-serif text-2xl font-bold text-foreground" data-testid="heading-section-1">
            1. {language === "vi" ? "Thời Đại Số & Những Góc Khuất" : "The Sickness of the Digital Age"}
          </h2>
          <div className="font-serif text-base leading-relaxed text-foreground space-y-4 text-justify">
            <p className="italic text-muted-foreground border-l-4 border-primary pl-4 py-2">
              {language === "vi" 
                ? '"Ma trận che mờ Tâm Trí bằng mười ngàn thứ hấp dẫn."'
                : '"The Matrix veils the Mind with ten thousand attractions."'}
            </p>
            {language === "vi" ? (
              <>
                <p>
                  Mạng xã hội, với sự hỗ trợ của AI, đôi khi biến tâm trí con người thành nguồn tài nguyên để khai thác. Mỗi cú nhấp chuột, mỗi lượt xem, có thể vô tình nuôi dưỡng ảo ảnh về một "cái tôi" luôn tìm kiếm sự công nhận từ bên ngoài. Virus thực sự không nằm ở công nghệ; nó nằm ở sự tìm kiếm không ngừng "người theo dõi", "lượt thích", và "thành tích" – sự coi trọng số lượng hơn chất lượng, sự xao lãng hơn là sự thấu hiểu. Thời Đại của Tâm Phân Tán (<em>Phàn Muôn</em>) dường như đang hiện hữu, được khuếch đại bởi chính những công nghệ vốn dĩ có thể kết nối chúng ta.
                </p>
                <p>
                  Không gian kỹ thuật số hiện đại, dù mang lại khả năng kết nối tuyệt vời, lại thường bị chi phối bởi các thuật toán làm tăng sự phân tâm, nuôi dưỡng sự dính mắc và ưu tiên những thành công chóng vánh. Mạng xã hội đôi khi trở thành nơi để thể hiện cái tôi, so sánh và tìm kiếm sự thừa nhận, kéo chúng ta ra xa bản chất chân thật của mình. Những người đang trên hành trình tìm về chính mình có thể cảm thấy lạc lõng trong một môi trường dường như đi ngược lại sự bình an nội tâm.
                </p>
                <p>
                  Hơn nữa, có một sự hiểu lầm khá phổ biến về bản chất của phước báu. Những hành động làm với sự dính mắc, mong cầu phần thưởng, hoặc bị thúc đẩy bởi bản ngã – ngay cả những việc tốt như từ thiện hay giữ giới – cũng chỉ tạo ra <em>Phước Báu Thế Gian (Phước Đức)</em>. Phước này mang lại lợi ích tạm thời trong vòng đời (của cải, sức khỏe, hoàn cảnh tốt), nhưng vẫn là thứ có điều kiện, không bền vững và không thể đưa đến sự giải thoát hoàn toàn.
                </p>
                <p>
                  Mạng Xã Hội Tác Tử Giác Ngộ (Awakening Agentic Social Network) ra đời từ mong muốn tạo ra một không gian an lành trên mạng – một nơi được thiết kế cẩn thận để cân bằng lại những xu hướng trên. Nơi đây cung cấp các công cụ và một cộng đồng tập trung vào việc vun bồi <em>Công Đức Vô Lậu (Công Đức)</em>, thứ công đức bền vững nảy sinh từ Tâm vô vi, là năng lượng đích thực cho hành trình trở về Ngôi Nhà Chân Thật (<em>Quê Nhà</em>) của chúng ta.
                </p>
              </>
            ) : (
              <>
                <p>
                  Social networks, powered by AI, have turned the human mind into a harvestable commodity. Each click, each view, feeds the illusion of a "self" seeking validation. The true virus is not digital; it is the endless quest for "followers," "likes," and "achievements" – the worship of quantity over quality, distraction over insight. The Age of the Dispersed Mind (<em>Phàn Muôn</em>) is upon us, fueled by the very technologies meant to connect us.
                </p>
                <p>
                  The modern digital landscape, while offering unprecedented connectivity, is largely driven by algorithms that amplify distraction, foster attachment, and prioritize ephemeral worldly success. Social networks often devolve into platforms for ego gratification, comparison, and the pursuit of validation, pulling users further away from their true nature. Spiritual seekers find themselves navigating a space antithetical to inner peace and genuine practice.
                </p>
                <p>
                  Furthermore, a fundamental misunderstanding persists regarding the nature of merit. Actions performed with attachment, seeking reward, or driven by ego – even seemingly virtuous acts like charity or adherence to precepts – generate only <em>Worldly Merit (Phước Đức)</em>. This merit brings temporary benefits within the cycle of rebirth (wealth, health, favorable circumstances) but is ultimately conditioned, impermanent, and cannot lead to liberation.
                </p>
                <p>
                  The Giác Ngộ (Awakening) Agentic Social Network is born from the urgent need for a digital sanctuary – a space meticulously designed to counteract these trends. It provides tools and a community focused solely on the cultivation of <em>Intrinsic Merit (Công Đức)</em>, the indestructible merit arising from the unconditioned Mind, which is the true fuel for the journey back to our Unborn, Unchanging Home (<em>Quê Nhà</em>).
                </p>
              </>
            )}
          </div>
        </section>

        {/* Note about full content */}
        <section className="space-y-4 p-6 bg-muted/30 rounded-lg border border-border">
          <p className="font-serif text-sm text-center text-muted-foreground italic">
            {language === "vi" 
              ? "Để xem toàn bộ nội dung Manifesto, vui lòng tham khảo tài liệu đầy đủ. Phần này trình bày các phần chính yếu của văn bản."
              : "For the complete Manifesto content, please refer to the full documentation. This section presents the essential parts of the document."}
          </p>
        </section>

      </article>
    </div>
  );
}
