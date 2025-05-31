import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Building2, MessageSquare, BookOpen, ArrowRight, Star, TrendingUp, Award } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br">

      {/* Start Exploring Section */}
      <section className="py-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Keşfetmeye Başla</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Internsy'de seni bekleyen deneyimlere bir göz at. Şirketleri, stajları, yorumları ve daha fazlasını
              keşfet!
            </p>
          </div>

          {/* Communities Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Toplulukları Keşfet</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Binlerce öğrenci ve profesyonelin oluşturduğu canlı topluluklara katıl. Deneyimlerini paylaş, sorularını
                sor ve networking fırsatlarını yakala.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-gray-700">Sektör bazlı özel gruplar</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Gerçek zamanlı soru-cevap</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-5 w-5 text-purple-500" />
                  <span className="text-gray-700">Kariyer gelişim etkinlikleri</span>
                </div>
              </div>
              <Link href="/topluluk" className="mt-6 inline-block">
                <Button className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg">
                  Toplulukları Gör <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <Card className="overflow-hidden shadow-xl border-0">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-white">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-xl font-semibold">Yazılım Geliştirme</h4>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm">1.2k üye</span>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white/10 p-4 rounded-lg">
                        <p className="text-sm">"Google'da staj deneyimim hakkında sorularınızı alayım!"</p>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="w-6 h-6 bg-white/30 rounded-full"></div>
                          <span className="text-xs">Ahmet K. • 2 saat önce</span>
                        </div>
                      </div>
                      <div className="bg-white/10 p-4 rounded-lg">
                        <p className="text-sm">"Frontend developer pozisyonları için portfolio önerileri"</p>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="w-6 h-6 bg-white/30 rounded-full"></div>
                          <span className="text-xs">Zeynep M. • 5 saat önce</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Companies Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative order-2 lg:order-1">
              <Card className="overflow-hidden shadow-xl border-0">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-8 text-white">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/10 p-4 rounded-lg text-center">
                        <Building2 className="h-8 w-8 mx-auto mb-2" />
                        <div className="text-2xl font-bold">500+</div>
                        <div className="text-sm opacity-90">Şirket</div>
                      </div>
                      <div className="bg-white/10 p-4 rounded-lg text-center">
                        <Award className="h-8 w-8 mx-auto mb-2" />
                        <div className="text-2xl font-bold">2.5k+</div>
                        <div className="text-sm opacity-90">Staj Pozisyonu</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between bg-white/10 p-3 rounded-lg">
                        <span className="font-medium">Google</span>
                        <span className="text-sm bg-white/20 px-2 py-1 rounded">15 pozisyon</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 p-3 rounded-lg">
                        <span className="font-medium">Microsoft</span>
                        <span className="text-sm bg-white/20 px-2 py-1 rounded">8 pozisyon</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 p-3 rounded-lg">
                        <span className="font-medium">Trendyol</span>
                        <span className="text-sm bg-white/20 px-2 py-1 rounded">12 pozisyon</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-emerald-100 rounded-full">
                  <Building2 className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 ">Şirketleri Keşfet</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Türkiye'nin en büyük şirket veritabanında dream job'unu bul. Şirket kültürlerini öğren, maaş bilgilerini
                incele ve başvuru süreçlerini keşfet.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-gray-700">500+ şirket profili</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Güncel maaş bilgileri</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-purple-500" />
                  <span className="text-gray-700">Şirket değerlendirmeleri</span>
                </div>
              </div>
              <Button className="mt-6 bg-emerald-600 hover:bg-emerald-700 p-2 rounded-lg">
                Şirketleri İncele <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Interviews Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-purple-100 rounded-full">
                  <MessageSquare className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Mülakat Deneyimlerini Öğren</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Gerçek mülakat deneyimlerinden öğren. Hangi soruların sorulduğunu, sürecin nasıl işlediğini ve başarı
                ipuçlarını keşfet.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-700">1000+ mülakat deneyimi</span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Soru bankası ve çözümleri</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-gray-700">Uzman tavsiyeleri</span>
                </div>
              </div>
              <Button className="mt-6 bg-purple-600 hover:bg-purple-700 p-2 rounded-lg">
                Deneyimleri Oku <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <Card className="overflow-hidden shadow-xl border-0">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-8 text-white">
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold mb-2">Son Mülakat Deneyimleri</h4>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white/10 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-medium">Google - Software Engineer Intern</span>
                        </div>
                        <p className="text-sm opacity-90">
                          "3 aşamalı süreç: Online test, teknik mülakat ve HR görüşmesi..."
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-3 w-3 fill-current" />
                            ))}
                          </div>
                          <span className="text-xs">Mehmet A.</span>
                        </div>
                      </div>
                      <div className="bg-white/10 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-medium">Trendyol - Product Manager Intern</span>
                        </div>
                        <p className="text-sm opacity-90">
                          "Case study ve sunum odaklı süreç. Çok destekleyici ekip..."
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex">
                            {[1, 2, 3, 4].map((star) => (
                              <Star key={star} className="h-3 w-3 fill-current" />
                            ))}
                            <Star className="h-3 w-3" />
                          </div>
                          <span className="text-xs">Ayşe K.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Career Guide Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <Card className="overflow-hidden shadow-xl border-0">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-orange-500 to-red-600 p-8 text-white">
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold mb-4">Popüler Rehberler</h4>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white/10 p-4 rounded-lg">
                        <div className="flex items-center gap-3">
                          <BookOpen className="h-5 w-5" />
                          <div>
                            <div className="font-medium">CV Hazırlama Rehberi</div>
                            <div className="text-sm opacity-90">15 dakikalık okuma</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white/10 p-4 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Award className="h-5 w-5" />
                          <div>
                            <div className="font-medium">LinkedIn Optimizasyonu</div>
                            <div className="text-sm opacity-90">10 dakikalık okuma</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white/10 p-4 rounded-lg">
                        <div className="flex items-center gap-3">
                          <TrendingUp className="h-5 w-5" />
                          <div>
                            <div className="font-medium">Staj Başvuru Stratejileri</div>
                            <div className="text-sm opacity-90">20 dakikalık okuma</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-orange-100 rounded-full">
                  <BookOpen className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Kariyer Rehberine Göz At</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Uzmanlar tarafından hazırlanan kapsamlı kariyer rehberleriyle profesyonel yolculuğunda bir adım öne geç.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-700">50+ detaylı rehber</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Uzman tavsiyeleri</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-5 w-5 text-purple-500" />
                  <span className="text-gray-700">Güncel sektör trendleri</span>
                </div>
              </div>
              <Button className="mt-6 bg-orange-600 hover:bg-orange-700 p-2 rounded-lg">
                Rehberleri İncele <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
