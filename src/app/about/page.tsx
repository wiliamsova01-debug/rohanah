'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Phone, MapPin, Mail, Clock, Users, Target, Award, Heart, ArrowLeft, ShoppingCart, Coffee, Cigarette } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  const milestones = [
    { year: '2020', title: 'Awal Mula', description: 'ROHANAH didirikan dengan visi menjadi toko retail terpercaya di Cibodas' },
    { year: '2021', title: 'Ekspansi Produk', description: 'Menambah berbagai produk makanan dan minuman berkualitas' },
    { year: '2022', title: 'Pelanggan Setia', description: 'Melayani lebih dari 1000 pelanggan setia setiap bulannya' },
    { year: '2023', title: 'Digitalisasi', description: 'Memperluas layanan dengan sistem modern dan digital' },
    { year: '2024', title: 'Komitmen Kualitas', description: 'Terus berinovasi dengan produk berkualitas dan pelayanan terbaik' }
  ]

  const values = [
    { title: 'Kejujuran', description: 'Selalu jujur dalam bisnis dan memberikan produk original', icon: Heart },
    { title: 'Kualitas', description: 'Hanya menyediakan produk berkualitas terbaik', icon: Award },
    { title: 'Pelayanan', description: 'Memberikan pelayanan terbaik untuk setiap pelanggan', icon: Users },
    { title: 'Komitmen', description: 'Berkomitmen untuk menjadi yang terbaik di bidangnya', icon: Target }
  ]

  const stats = [
    { number: '1000+', label: 'Pelanggan Setia' },
    { number: '100+', label: 'Variasi Produk' },
    { number: '5+', label: 'Tahun Pengalaman' },
    { number: '365', label: 'Hari Operasional' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-orange-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  ROHANAH
                </h1>
                <p className="text-sm text-gray-600">Tentang Kami</p>
              </div>
            </div>
            <Link href="/">
              <Button variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">
              🏪 Tentang ROHANAH
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent">
              Cerita Kami
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Dari sebuah toko kecil menjadi destinasi belanja terpercaya di Cibodas, 
              <span className="font-semibold text-orange-600"> ROHANAH</span> berkomitmen untuk 
              memberikan produk berkualitas dan pelayanan terbaik.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-orange-100">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-orange-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Perjalanan ROHANAH</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                ROHANAH dimulai sebagai sebuah toko kecil di KP. Cibodas dengan niat sederhana: 
                menyediakan kebutuhan sehari-hari bagi masyarakat sekitar dengan harga terjangkau 
                dan kualitas terjamin.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Seiring berjalannya waktu, dengan kepercayaan dari pelanggan setia, kami terus 
                berkembang dan memperluas produk kami. Saat ini, ROHANAH telah menjadi salah satu 
                toko retail terpercaya di Kecamatan Cibodas.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Kami tidak hanya menjual produk, tetapi juga membangun hubungan dengan setiap 
                pelanggan. Setiap transaksi adalah kepercayaan yang kami jaga dengan serius.
              </p>
            </div>
            <div className="space-y-4">
              <Card className="border-orange-100">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Visi Kami</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Menjadi toko retail pilihan utama di Cibodas yang menyediakan produk 
                    berkualitas dengan pelayanan terbaik.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-orange-100">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Misi Kami</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Menyediakan produk berkualitas dengan harga terjangkau</li>
                    <li>• Memberikan pelayanan terbaik untuk pelanggan</li>
                    <li>• Terus berinovasi dan berkembang sesuai kebutuhan</li>
                    <li>• Membangun hubungan jangka panjang dengan pelanggan</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Nilai-Nilai Kami</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Prinsip yang memandu setiap keputusan dan tindakan kami
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg text-gray-900">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Perjalanan Kami</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Milestone penting dalam perjalanan ROHANAH
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                    {milestone.year}
                  </div>
                  <div className="flex-grow">
                    <Card className="border-orange-100">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-gray-900">{milestone.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Focus Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Produk Unggulan Kami</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kategori produk yang menjadi fokus utama kami
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-orange-100">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Makanan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Berbagai makanan ringan dan berat dengan kualitas terjamin dan harga terjangkau
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-orange-100">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Minuman</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Pilihan minuman dingin dan panas untuk segala kebutuhan dan kesempatan
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-orange-100">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cigarette className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Rokok & Tembakau</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Berbagai merek rokok dan produk tembakau dengan harga bersaing
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Hubungi Kami</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami siap melayani kebutuhan Anda
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-orange-100">
              <CardHeader>
                <MapPin className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <CardTitle className="text-lg text-gray-900">Kunjungi Kami</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  KP. CIBODAS<br />
                  Cibodas, Tangerang<br />
                  Banten 15138
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-orange-100">
              <CardHeader>
                <Phone className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <CardTitle className="text-lg text-gray-900">Telepon</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  0823-1059-8328
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-orange-100">
              <CardHeader>
                <Mail className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <CardTitle className="text-lg text-gray-900">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  info@rohanah.com
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h4 className="text-xl font-bold mb-4">ROHANAH</h4>
          <p className="text-orange-100 mb-6">
            Toko retail terpercaya untuk semua kebutuhan Anda
          </p>
          <Separator className="bg-orange-400 mb-6" />
          <div className="text-orange-100">
            <p>&copy; 2024 ROHANAH. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}