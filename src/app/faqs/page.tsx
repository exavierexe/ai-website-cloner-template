export default function FAQsPage() {
  const faqs = [
    {
      question: "Are your products safe for ceramic coated cars?",
      answer: "Yes, our products are specifically formulated to be safe and effective on ceramic coated vehicles, helping to maintain and enhance the coating&apos;s hydrophobic properties."
    },
    {
      question: "How long does shipping take?",
      answer: "We typically process orders within 1-2 business days. Standard shipping within New Zealand takes 2-4 business days."
    },
    {
      question: "Can I use the Waterless Wash on a heavily soiled vehicle?",
      answer: "For heavily soiled vehicles with thick mud or grit, we recommend a traditional wash first to avoid scratching the paint. Waterless Wash is perfect for light to moderate dirt, dust, and maintaining a clean look."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unopened and unused products. Please check our Refund Policy page for full details."
    }
  ];

  return (
    <div className="py-24 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16 relative">
          <h1 className="text-5xl font-black uppercase tracking-widest relative z-10 inline-block bg-background px-8">FAQs</h1>
          <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-[#333] -z-0" />
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-[#333] bg-[#111] p-8">
              <h3 className="text-xl font-bold uppercase tracking-wider text-primary mb-4">{faq.question}</h3>
              <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
