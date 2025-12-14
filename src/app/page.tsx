'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Phone, Mail, MapPin, Clock, ShoppingCart, Coffee, Cigarette, Package, Star, Users, TrendingUp, Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const businessHours = [
    { day: 'Senin - Jumat', hours: '07:00 - 22:00' },
    { day: 'Sabtu', hours: '07:00 - 23:00' },
    { day: 'Minggu', hours: '08:00 - 22:00' }
  ]

  const products = [
    { name: 'Makanan', icon: ShoppingCart, description: 'Berbagai makanan ringan dan berat' },
    { name: 'Minuman', icon: Coffee, description: 'Minuman dingin dan panas' },
    { name: 'Rokok & Tembakau', icon: Cigarette, description: 'Berbagai merek rokok dan tembakau' }
  ]

  const features = [
    { title: '100% Original', description: 'Semua produk dijamin original', icon: Package },
    { title: 'Harga Terjangkau', description: 'Harga bersaing dan terjangkau', icon: TrendingUp },
    { title: 'Layanan Ramah', description: 'Pelayanan terbaik untuk pelanggan', icon: Users },
    { title: 'Buka Setiap Hari', description: 'Siap melayani kebutuhan Anda', icon: Clock }
  ]

  const isOpen = () => {
    const now = currentTime
    const day = now.getDay()
    const hour = now.getHours()
    
    if (day >= 1 && day <= 5) { // Senin - Jumat
      return hour >= 7 && hour < 22
    } else if (day === 6) { // Sabtu
      return hour >= 7 && hour < 23
    } else { // Minggu
      return hour >= 8 && hour < 22
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-orange-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-4">
              <img src="/logo.png" alt="ROHANAH Logo" className="w-12 h-12 rounded-full" />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  ROHANAH
                </h1>
                <p className="text-sm text-gray-600">Toko Retail Terpercaya</p>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/about" className="text-gray-700 hover:text-orange-600 transition-colors">Tentang</Link>
              <Link href="/privacy" className="text-gray-700 hover:text-orange-600 transition-colors">Privacy</Link>
              <Link href="/terms" className="text-gray-700 hover:text-orange-600 transition-colors">Terms</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Badge variant={isOpen() ? "default" : "secondary"} className="bg-green-500 hover:bg-green-600">
                {isOpen() ? 'BUKA' : 'TUTUP'}
              </Badge>
              <div className="text-sm text-gray-600">
                {currentTime.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
              </div>
              
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pt-4 border-t border-orange-100">
              <div className="flex flex-col space-y-3">
                <Link href="/about" className="text-gray-700 hover:text-orange-600 transition-colors">Tentang</Link>
                <Link href="/privacy" className="text-gray-700 hover:text-orange-600 transition-colors">Privacy</Link>
                <Link href="/terms" className="text-gray-700 hover:text-orange-600 transition-colors">Terms</Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">
              🏪 Toko Retail Modern
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent">
              ROHANAH
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Solusi lengkap kebutuhan <span className="font-semibold text-orange-600">makanan, minuman, dan rokok</span> dengan harga terjangkau dan kualitas terjamin
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8">
                <Phone className="w-4 h-4 mr-2" />
                Hubungi Kami
              </Button>
              <Button size="lg" variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50">
                <MapPin className="w-4 h-4 mr-2" />
                Kunjungi Toko
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Produk Kami</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Menyediakan berbagai kebutuhan sehari-hari dengan kualitas terbaik
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {products.map((product, index) => {
              const Icon = product.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-orange-100">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{product.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Mengapa Memilih ROHANAH?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami berkomitmen memberikan pelayanan terbaik untuk kepuasan pelanggan
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg text-gray-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact & Hours Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="border-orange-100">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <MapPin className="w-6 h-6 mr-2 text-orange-600" />
                  Kontak & Lokasi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Alamat</p>
                    <p className="text-gray-600">
                      KP. CIBODAS, Desa/Kelurahan Cibodas<br />
                      Kec. Cibodas, Kota Tangerang<br />
                      Provinsi Banten, 15138
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Telepon</p>
                    <p className="text-gray-600">0823-1059-8328</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">info@rohanah.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-100">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Clock className="w-6 h-6 mr-2 text-orange-600" />
                  Jam Operasional
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="font-medium text-gray-900">{schedule.day}</span>
                      <span className="text-orange-600 font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                  <p className="text-sm text-orange-800 text-center">
                    🎉 Buka setiap hari untuk melayani kebutuhan Anda!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4">ROHANAH</h4>
              <p className="text-orange-100">
                Toko retail terpercaya untuk semua kebutuhan makanan, minuman, dan rokok Anda.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Layanan</h5>
              <ul className="space-y-2 text-orange-100">
                <li>• Makanan & Minuman</li>
                <li>• Rokok & Tembakau</li>
                <li>• Produk Retail Lainnya</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Legal</h5>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-orange-100 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-orange-100 hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
          <Separator className="bg-orange-400 mb-6" />
          <div className="text-center text-orange-100">
            <p>&copy; 2024 ROHANAH. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}