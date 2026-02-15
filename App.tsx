
import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  CheckCircle, 
  Truck, 
  RotateCcw, 
  Star, 
  ShieldCheck, 
  Award, 
  Zap,
  ArrowRight
} from 'lucide-react';
import { FAQItem, ReviewItem, OfferItem } from './types';

// --- Components ---

const Navbar: React.FC = () => (
  <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
    <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
      <div className="font-bold text-xl tracking-tight text-blue-600">우리 브랜드</div>
      <button className="text-sm font-semibold bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
        로그인
      </button>
    </div>
  </nav>
);

const Hero: React.FC = () => (
  <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32 bg-white">
    <div className="max-w-5xl mx-auto px-4 text-center">
      <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full">
        신규 회원을 위한 특별 제안
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
        첫 구매가 망설여졌다면,<br />
        <span className="text-blue-600">오늘은 가볍게 시작하세요.</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
        망설임 없는 첫 경험을 위해 우리 브랜드가<br className="hidden md:block" />
        가장 합리적이고 안전한 구성을 준비했습니다.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white text-lg font-bold rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-0.5 transition-all">
          첫 구매 혜택 받기
        </button>
        <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 text-lg font-bold rounded-xl border border-gray-200 hover:bg-gray-50 transition-all">
          지금 가볍게 시작하기
        </button>
      </div>
    </div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full max-w-4xl h-full bg-blue-50/50 blur-3xl rounded-full"></div>
  </section>
);

const OfferSection: React.FC = () => {
  const offers: OfferItem[] = [
    {
      title: "즉시 할인 혜택",
      description: "첫 구매 고객님께만 드리는 특별한 가격 장벽 해소",
      icon: <Award className="w-8 h-8 text-blue-600" />,
      condition: "첫 구매 시 10~15% 할인 쿠폰 즉시 자동 적용"
    },
    {
      title: "무료배송 지원",
      description: "배송비 걱정 없이 하나만 사도 부담 제로",
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      condition: "신규 가입 후 첫 주문 시 금액 무관 전 상품 무료배송"
    },
    {
      title: "30일 안심 보장",
      description: "직접 써보시고 결정하세요. 후회 없는 선택",
      icon: <RotateCcw className="w-8 h-8 text-blue-600" />,
      condition: "수령 후 30일 이내라면 조건 없는 무료 반품/교환"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="p-4 bg-blue-50 rounded-2xl mb-6">
                {offer.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{offer.title}</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                {offer.description}
              </p>
              <div className="mt-auto w-full pt-4 border-t border-gray-50">
                <p className="text-xs font-medium text-gray-400">
                  {offer.condition}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RiskReversal: React.FC = () => (
  <section className="py-24 bg-white">
    <div className="max-w-5xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6 leading-tight">
            왜 안심하고 사도 되나요?<br />
            <span className="text-blue-600">품질에 대한 근거 있는 자신감</span>
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h4 className="font-bold mb-1">엄격한 품질 테스트 완료</h4>
                <p className="text-gray-600 text-sm">전문가들이 꼼꼼하게 검수한 '우리 제품'만을 선보입니다. 반품률이 낮은 이유가 있습니다.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h4 className="font-bold mb-1">실패해도 괜찮은 시스템</h4>
                <p className="text-gray-600 text-sm">혹시라도 마음에 들지 않는다면? 30일 이내에 말씀만 해주세요. 반품 절차는 저희가 다 챙깁니다.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full">
          <div className="aspect-video bg-gray-100 rounded-3xl overflow-hidden relative group">
            <img 
              src="https://picsum.photos/seed/trust/800/600" 
              alt="Brand Trust" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SocialProof: React.FC = () => {
  const reviews: ReviewItem[] = [
    {
      id: 1,
      author: "김*은 님",
      rating: 5,
      content: "처음 사는 거라 반신반의했는데, 15% 할인받고 배송비도 없어서 가볍게 주문했어요. 결과는 대만족입니다!",
      tag: "첫 구매 고객"
    },
    {
      id: 2,
      author: "이*진 님",
      rating: 5,
      content: "반품이 진짜 될까 싶었는데 무료반품 안내 보고 믿음이 생기더라고요. 품질이 너무 좋아서 반품할 일은 없겠네요.",
      tag: "품질 만족"
    },
    {
      id: 3,
      author: "박*우 님",
      rating: 5,
      content: "배송비 아까워서 장바구니에만 넣어뒀는데, 이벤트로 무료배송 받으니 너무 기분 좋게 쇼핑했습니다.",
      tag: "배송 만족"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">이미 많은 분들이 가볍게 시작했습니다</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">"{review.content}"</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-900">{review.author}</span>
                <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-500">{review.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "15% 할인은 어떻게 받나요?",
      answer: "신규 가입 시 쿠폰함으로 자동 발급되며, 주문 결제 단계에서 '첫 구매 쿠폰'을 선택하시면 즉시 적용됩니다."
    },
    {
      question: "정말 배송비가 0원인가요?",
      answer: "네, 맞습니다. 신규 회원의 첫 주문에 한해서는 구매 금액에 상관없이 모든 상품의 배송비를 저희가 부담합니다."
    },
    {
      question: "30일 무료 반품 정책은 무엇인가요?",
      answer: "상품 수령 후 30일 이내라면 단순 변심이라도 무료로 반품 및 교환이 가능합니다. 단, 상품이 훼손되지 않은 상태여야 합니다."
    },
    {
      question: "반품 접수는 어떻게 하나요?",
      answer: "마이페이지 > 주문내역에서 '반품 요청' 버튼만 누르면 기사님이 영업일 기준 1-2일 내로 방문하여 수거해 갑니다."
    },
    {
      question: "기존 쿠폰과 중복 사용이 가능한가요?",
      answer: "첫 구매 혜택은 가장 큰 폭의 할인을 제공하기 위해 단독 사용을 권장하지만, 적립금 등은 함께 사용하실 수 있습니다."
    },
    {
      question: "결제는 어떤 방식이 가능한가요?",
      answer: "신용카드, 카카오페이, 네이버페이, 가상계좌 등 국내 모든 결제 수단을 지원하여 편리한 구매를 돕고 있습니다."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">자주 묻는 질문</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-800">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              {openIdx === idx && (
                <div className="p-6 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(1800); // 30 mins fake timer

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 1800));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <section className="py-24 bg-blue-600 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <div className="flex justify-center mb-8">
          <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-bold flex items-center gap-2">
            <Zap className="w-4 h-4 fill-current" />
            오늘 자정까지, 신규 혜택 마감 임박
          </div>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          망설였던 시간만큼,<br />
          후회 없는 만족을 드릴게요.
        </h2>
        <p className="text-blue-100 text-lg mb-10 opacity-90">
          지금 시작하시면 15% 할인과 무료배송 혜택을<br className="hidden md:block" />
          모두 놓치지 않고 챙기실 수 있습니다.
        </p>
        <div className="flex flex-col items-center gap-6">
          <button className="w-full max-w-sm px-8 py-5 bg-white text-blue-600 text-xl font-black rounded-2xl shadow-2xl hover:bg-gray-50 transition-transform active:scale-95 flex items-center justify-center gap-2 group">
            첫 구매 혜택 받기
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-blue-200 text-sm">
            현재 342명의 고객님이 첫 혜택 페이지를 보고 있습니다.
          </p>
        </div>
      </div>
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
    </section>
  );
};

const Footer: React.FC = () => (
  <footer className="py-12 bg-white border-t border-gray-100">
    <div className="max-w-5xl mx-auto px-4 text-center">
      <div className="font-bold text-xl text-gray-400 mb-6">우리 브랜드</div>
      <p className="text-sm text-gray-400 mb-4">
        서울특별시 강남구 테헤란로 123 | 대표: 홍길동 | 사업자등록번호: 123-45-67890
      </p>
      <div className="text-xs text-gray-400 flex justify-center gap-4">
        <a href="#" className="hover:underline">이용약관</a>
        <a href="#" className="hover:underline font-bold">개인정보처리방침</a>
        <a href="#" className="hover:underline">고객센터</a>
      </div>
    </div>
  </footer>
);

const MobileStickyCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 z-50 md:hidden bg-white/80 backdrop-blur-md border-t border-gray-100">
      <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg active:scale-95 transition-transform">
        지금 가볍게 시작하기
      </button>
    </div>
  );
};

// --- App Component ---

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <OfferSection />
      <RiskReversal />
      <SocialProof />
      <FAQ />
      <FinalCTA />
      <Footer />
      <MobileStickyCTA />
      
      {/* Summary for Developer Reference */}
      <div className="hidden">
        한 줄 요약: 첫 구매의 심리적/경제적 허들을 15% 할인, 무료배송, 30일 안심 반품으로 완벽히 제거하여 즉각적인 전환을 유도하는 랜딩페이지.
      </div>
    </div>
  );
};

export default App;
