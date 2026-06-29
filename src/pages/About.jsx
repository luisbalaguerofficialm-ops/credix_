import React, { useEffect } from "react";
import {
  Lock,
  Gavel,
  Wallet,
  ShieldCheck,
  Globe,
  School,
  Leaf,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import chan from "../assets/chan.png";
import { Link } from "react-router";
import ScrollReveal from "scrollreveal";

export default function About() {
  useEffect(() => {
    const sr = ScrollReveal({
      duration: 700,
      distance: "50px",
      reset: true,
      easing: "ease-out",
    });

    sr.reveal(".from", { origin: "bottom", delay: 100 });
    sr.reveal(".late", { origin: "top", delay: 150 });
    sr.reveal(".upto", { origin: "left", delay: 200 });
    sr.reveal(".down", { origin: "right", delay: 250 });
    sr.reveal(".goo", { origin: "top", delay: 203 });
    sr.reveal(".earth", { origin: "right", delay: 150 });
    sr.reveal(".moon", { origin: "bottom", delay: 200 });
    sr.reveal(".star", { origin: "right", delay: 140 });
  }, []);
  return (
    <div className="bg-[#f3faff] text-[#001f29] font-sans text-left antialiased selection:bg-[#c4e7ff] selection:text-[#001e2d]">
      <main>
        {/* */}
        <section className="relative h-[480px] flex items-center overflow-hidden bg-gray-900">
          <div className="absolute inset-0 z-0">
            <img
              alt="Credit Union Team"
              className="w-full h-full object-cover opacity-80"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA33hHIjqBk86CVk9kXz_FzVvzHyOEGgeMC8OFzcSLJbgg0xsUlcsydRQJqTh51Ez2STIcJ6kB2nPNiQIU7g4L_Hl7wDBnSDTGGICOy9S92LUdN1-lCTdIEjB28aa0ekT-q42do-FiBCJq-xNPNX4LgkQMWALCBx4YvXPAFc4bRKF-fp9R8R0UyteuxnbosLA5iVcjcXyepOoJfbTAVQ3wJKB-rwlWFO3BzKHSHUKz2i1pqLZyKKHXtJk_ziZ6LZ3qGusa8SycT9o8"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
            <div className="max-w-2xl text-[#FFFFFF]">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our Mission is Your Prosperity
              </h1>
              <p className="text-lg opacity-90 mb-8 leading-relaxed">
                For over 50 years, Credit Union has been more than just a bank.
                We are a member-owned cooperative dedicated to empowering
                individuals and building stronger communities.
              </p>
              <div className="flex gap-4">
                <Link
                  to={"/login"}
                  className="bg-[#496801] text-[#ffffff] px-6 py-3 rounded-md font-semibold hover:bg-[#3d5601] transition-colors"
                >
                  Become a Member
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#00516f] mb-4">
                Professional Excellence
              </h2>
              <p className="text-[#40484e] max-w-2xl mx-auto">
                Our institutional strength is built on a foundation of rigorous
                standards, expert guidance, and advanced security
                infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* */}
              <div className="p-8 rounded-xl bg-[#e5f6ff] border border-[#bfc8cf] transition-all hover:shadow-sm moon">
                <div className="w-12 h-12 bg-[#006a91] text-[#bde5ff] rounded-lg flex items-center justify-center mb-6">
                  <Gavel size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#006a91] mb-3">
                  Regulatory Compliance
                </h3>
                <p className="text-[#40484e] text-sm leading-relaxed">
                  Adhering to the highest financial standards with full federal
                  insurance coverage through the NCUA for your peace of mind.
                </p>
              </div>

              {/* */}
              <div className="p-8 rounded-xl bg-[#e5f6ff] border border-[#bfc8cf] transition-all hover:shadow-sm star">
                <div className="w-12 h-12 bg-[#006a91] text-[#bde5ff] rounded-lg flex items-center justify-center mb-6">
                  <Wallet size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#006a91] mb-3">
                  Expert Advisory
                </h3>
                <p className="text-[#40484e] text-sm leading-relaxed">
                  Our team of certified professionals provides personalized
                  wealth management strategies tailored to your unique financial
                  goals.
                </p>
              </div>

              {/* */}
              <div className="p-8 rounded-xl bg-[#e5f6ff] border border-[#bfc8cf] transition-all hover:shadow-sm earth">
                <div className="w-12 h-12 bg-[#006a91] text-[#bde5ff] rounded-lg flex items-center justify-center mb-6">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#006a91] mb-3">
                  Advanced Security
                </h3>
                <p className="text-[#40484e] text-sm leading-relaxed">
                  Multi-layered encryption and proactive 24/7 fraud monitoring
                  systems ensure your assets and data remain impenetrable.
                </p>
              </div>

              {/* */}
              <div className="p-8 rounded-xl bg-[#e5f6ff] border border-[#bfc8cf] transition-all hover:shadow-sm goo">
                <div className="w-12 h-12 bg-[#006a91] text-[#bde5ff] rounded-lg flex items-center justify-center mb-6">
                  <Globe size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#006a91] mb-3">
                  Global Reach
                </h3>
                <p className="text-[#40484e] text-sm leading-relaxed">
                  Handling complex international transactions with institutional
                  efficiency while maintaining our core community-first values.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* */}
        <section className="bg-[#F8FAFB] py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#006a91] mb-4">
                Our Journey
              </h2>
              <p className="text-[#40484e] max-w-2xl mx-auto">
                From a small basement office to a regional financial leader, our
                story is one of resilience and community trust.
              </p>
            </div>

            <div className="relative space-y-12 max-w-4xl mx-auto">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#bfc8cf] hidden md:block transform -translate-x-1/2"></div>

              {/* */}
              <div className="relative flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-[45%] text-right hidden md:block">
                  <h3 className="text-xl font-bold text-[#00516f]">
                    Founded 1975
                  </h3>
                  <p className="text-[#40484e] text-sm mt-1">
                    Established by 12 local teachers with just $500 in
                    collective savings.
                  </p>
                </div>
                <div className="w-12 h-12 bg-[#496801] rounded-full flex items-center justify-center text-[#ffffff] font-bold z-10 shrink-0">
                  1975
                </div>
                <div className="md:w-[45%] text-left md:hidden mt-2">
                  <h3 className="text-xl font-bold text-[#00516f]">
                    Founded 1975
                  </h3>
                  <p className="text-[#40484e] text-sm mt-1">
                    Established by 12 local teachers with just $500 in
                    collective savings.
                  </p>
                </div>
                <div className="md:w-[45%] hidden md:block"></div>
              </div>

              {/* */}
              <div className="relative flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-[45%] hidden md:block"></div>
                <div className="w-12 h-12 bg-[#00516f] rounded-full flex items-center justify-center text-[#ffffff] font-bold z-10 shrink-0">
                  2010
                </div>
                <div className="md:w-[45%] text-left mt-2 md:mt-0">
                  <h3 className="text-xl font-bold text-[#00516f]">
                    Expanding Horizons
                  </h3>
                  <p className="text-[#40484e] text-sm mt-1">
                    We opened our first full-service branch and introduced
                    business banking services.
                  </p>
                </div>
              </div>

              {/* */}
              <div className="relative flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-[45%] text-right hidden md:block">
                  <h3 className="text-xl font-bold text-[#00516f]">
                    Digital Transformation
                  </h3>
                  <p className="text-[#40484e] text-sm mt-1">
                    Launched our award-winning mobile banking app, serving over
                    100,000 members.
                  </p>
                </div>
                <div className="w-12 h-12 bg-[#234552] rounded-full flex items-center justify-center text-white font-bold z-10 shrink-0">
                  2026
                </div>
                <div className="md:w-[45%] text-left md:hidden mt-2">
                  <h3 className="text-xl font-bold text-[#00516f]">
                    Digital Transformation
                  </h3>
                  <p className="text-[#40484e] text-sm mt-1">
                    Launched our award-winning mobile banking app, serving over
                    100,000 members.
                  </p>
                </div>
                <div className="md:w-[45%] hidden md:block"></div>
              </div>
            </div>
          </div>
        </section>

        {/* */}
        <section className="py-20 max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-[#00516f] mb-2">
                Our Leadership
              </h2>
              <p className="text-[#40484e]">
                Visionary experts committed to member success.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* */}
            <div className="group upto">
              <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4 bg-[#d7f2ff]">
                <img
                  alt="Robert Sterling"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuApSgg2O51wUcs_jguA8EY_ssujHktTIi-baCUsWujq-O79gzy98AULw-hdwxr-tgBbQP0REBTKdri__9C4KtLdNtg2IArrinboSTr_zsajN5hAxOhQA7XOLjIwD68nI7GcNFbl3dS2yvsX6Bmr2xcFw3_4j1mQwlLltYYpD0yg5QlOikh4hfMd89BWTCOHUSPdzOLh8VmvAcTwY5c60IqsrdRbYIFjqZXW9CeAhi1myd4wsgrMjVNxa7UrfoxzXzMC9nBqr7-7rg8"
                />
              </div>
              <h4 className="text-lg font-bold text-[#001f29]">
                Robert Sterling
              </h4>
              <p className="text-[#00516f] text-sm">President & CEO</p>
            </div>

            {/* */}
            <div className="group late">
              <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4 bg-[#d7f2ff]">
                <img
                  alt="Elena Rodriguez"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB428LkhxQ5Nz_o80awa0Xs1Fc8Cmy6KLXbhnXiIocTuPFN2RXYD6vOWg1g6FL6rMGVxtkbtWuWURaUPM18Tq9JYWPvTDvvD5CblDTUEz0gupVWMNgliDMO3lBsFx5-Kq0aYW88UYs6h-yzRwNsaU6P3t6v7qMFibELXwo2bxw_kSK5SA_RsolG_ZFCGlaP4JL8nY6Oa0SQpwgArf3pPbda8wcT_cqrJYXsMThvFUflowfWrsB2uk9AAwkf0GX9rEfIBq1Aryxsn8A"
                />
              </div>
              <h4 className="text-lg font-bold text-[#001f29]">
                Elena Rodriguez
              </h4>
              <p className="text-[#00516f] text-sm">Chief Financial Officer</p>
            </div>

            {/* */}
            <div className="group down">
              <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4 bg-[#d7f2ff]">
                <img
                  alt="Marcus Chen"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKwwNt-W9qiwyONP4PK6aUKR8_NWtjdRPrQJv6Y-JrORoy1MGNModjfSL0mPOu-GBMk-Fjfg3Q8m-IA_Rw6QG-dW5d3_ADHCTlwJr9BfOO2PtfgpExbecXsE5ZS2n-r1GfsBzIsYOd7RpkDx6owBh1FRLGrALQoq8ICXr5oMAiZyeCt_DK5daq7b1wltEghw76jCmRBmmWmUpHBHkXy9uKVwzxE6YQ-JhOSd72H3DiIl0xrGppNtFv_eS6uixcj6IYOc5jmQnfXzs"
                />
              </div>
              <h4 className="text-lg font-bold text-[#001f29]">Marcus Chen</h4>
              <p className="text-[#00516f] text-sm">Chief Technology Officer</p>
            </div>

            {/* */}
            <div className="group from">
              <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4 bg-[#d7f2ff]">
                <img
                  alt="Sarah Jenkins"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQBnRDDimiTb7A5AQqGsuONxlrfXnrNE6dorLnN3cnnQSWIWjYfASOuBJI1SprQlaIy6E4TpsD_Pzo4Twc58MVLA1BgKgjRMFnWPSGWwppSGC1CrvGSGm69WB1BoYnYbPR3xkxgRAwa01OzMJswOX6lyGcx7xHEH62BKWKO6Q1I2YjqlF5NTzZruDck5GQJtX8F8R0iy1BSFxAHm_UZIh2yawUxhJGuDMG9TaC5xd9nq-arvB5YkI9RS1kpiOzzERmlt3Og8dy9lY"
                />
              </div>
              <h4 className="text-lg font-bold text-[#001f29]">
                Sarah Jenkins
              </h4>
              <p className="text-[#00516f] text-sm">Chief Operating Officer</p>
            </div>
          </div>
        </section>

        {/* */}
        <section className="bg-[#f3faff] py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col lg:flex-row border border-gray-100">
              <div className="lg:w-1/2 p-8 md:p-16">
                <h2 className="text-3xl font-bold text-[#00516f] mb-6">
                  Our Community Commitment
                </h2>
                <p className="text-[#40484e] mb-8 leading-relaxed">
                  We reinvest our earnings back into the places where our
                  members live and work. Last year, we donated over $1.5M to
                  local non-profits and volunteered 5,000+ hours.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#e2f3cb] p-3 rounded-lg text-[#4d6c06] flex shrink-0">
                      <School size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#001f29]">
                        Education First
                      </h4>
                      <p className="text-[#40484e] text-sm mt-1">
                        Providing scholarships and financial literacy workshops
                        to local schools.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#006a91] p-3 rounded-lg text-[#bde5ff] flex shrink-0">
                      <Leaf size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#001f29]">
                        Sustainable Future
                      </h4>
                      <p className="text-[#40484e] text-sm mt-1">
                        Partnering with green initiatives to reduce our
                        collective carbon footprint.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 relative min-h-[350px]">
                <img
                  alt="Volunteering"
                  className="absolute inset-0 w-full h-full object-cover"
                  src={chan}
                />
              </div>
            </div>
          </div>
        </section>

        {/* */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="bg-[#1b3644] rounded-2xl p-12 text-center text-white shadow-xl">
              <h2 className="text-3xl font-bold mb-4">
                Ready to join the community?
              </h2>
              <p className="opacity-80 mb-8 max-w-2xl mx-auto">
                Experience the difference of a member-owned financial partner
                that puts your needs first.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to={"/new-account"}
                  className="bg-[#496801] text-white px-8 py-3 rounded-md font-bold hover:bg-[#3b5401] transition-colors"
                >
                  Open an Account
                </Link>
                <p className="bg-transparent px-8 py-3 rounded-md font-bold hover:bg-white hover:text-[#1b3644] transition-all">
                  Annual Report
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
