'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, Shield, Eye, Database, Users, Lock, FileText } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPage() {
  const privacySections = [
    {
      title: 'Informasi yang Kami Kumpulkan',
      icon: Database,
      content: [
        'Informasi pribadi yang Anda berikan secara sukarela (nama, alamat, nomor telepon)',
        'Informasi transaksi pembelian (produk yang dibeli, jumlah, tanggal pembelian)',
        'Informasi kontak (email, nomor telepon untuk komunikasi)',
        'Data penggunaan website (cookies, alamat IP, browser yang digunakan)'
      ]
    },
    {
      title: 'Penggunaan Informasi',
      icon: Eye,
      content: [
        'Memproses dan menyelesaikan transaksi pembelian',
        'Mengirimkan informasi tentang produk dan layanan kami',
        'Meningkatkan kualitas layanan dan produk',
        'Menghubungi Anda terkait pesanan atau layanan pelanggan',
        'Mematuhi kewajiban hukum dan peraturan yang berlaku'
      ]
    },
    {
      title: 'Keamanan Data',
      icon: Lock,
      content: [
        'Kami menggunakan teknologi keamanan standar industri untuk melindungi data Anda',
        'Akses ke data pribadi dibatasi untuk karyawan yang membutuhkan akses',
        'Kami secara berkala meninjau kebijakan keamanan kami',
        'Data Anda disimpan dengan aman dan tidak dibagikan kepada pihak ketiga tanpa persetujuan'
      ]
    },
    {
      title: 'Hak Privasi Anda',
      icon: Users,
      content: [
        'Hak untuk mengakses data pribadi yang kami simpan tentang Anda',
        'Hak untuk memperbaiki data yang tidak akurat',
        'Hak untuk meminta penghapusan data pribadi Anda',
        'Hak untuk menolak pemasaran langsung dari kami',
        'Hak untuk membuat keluhan tentang penggunaan data Anda'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-orange-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  ROHANAH
                </h1>
                <p className="text-sm text-gray-600">Privacy Policy</p>
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
              🔒 Kebijakan Privasi
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent">
              Privacy Policy
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Di <span className="font-semibold text-orange-600">ROHANAH</span>, kami 
              sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="border-orange-100">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600">Terakhir diperbarui: <span className="font-semibold text-gray-900">1 Januari 2024</span></p>
                  </div>
                  <Badge variant="outline" className="border-orange-300 text-orange-600">
                    <FileText className="w-3 h-3 mr-1" />
                    Versi 1.0
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="border-orange-100">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Shield className="w-6 h-6 mr-2 text-orange-600" />
                  Pendahuluan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Selamat datang di kebijakan privasi ROHANAH. Dokumen ini menjelaskan bagaimana kami 
                  mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda ketika Anda berinteraksi 
                  dengan toko kami, baik secara langsung maupun melalui website.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  ROHANAH adalah toko retail yang bergerak di bidang perdagangan eceran makanan, minuman, 
                  dan rokok tembakau. Kami berlokasi di KP. Cibodas, Kecamatan Cibodas, Kota Tangerang, 
                  Provinsi Banten.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Dengan menggunakan layanan kami, Anda setuju dengan praktik pengumpulan dan penggunaan 
                  data yang dijelaskan dalam kebijakan ini.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            {privacySections.map((section, index) => {
              const Icon = section.icon
              return (
                <Card key={index} className="border-orange-100 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 flex items-center">
                      <Icon className="w-5 h-5 mr-2 text-orange-600" />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Cookies Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="border-orange-100">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Kebijakan Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna. Cookies adalah 
                  file teks kecil yang disimpan di browser Anda untuk mengingat preferensi Anda.
                </p>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Jenis cookies yang kami gunakan:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <span className="font-semibold">Cookies Esensial:</span> Diperlukan untuk fungsi dasar website</li>
                    <li>• <span className="font-semibold">Cookies Performa:</span> Membantu kami memahami cara pengguna menggunakan website</li>
                    <li>• <span className="font-semibold">Cookies Fungsional:</span> Mengingat preferensi dan pengaturan Anda</li>
                  </ul>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Anda dapat mengatur preferensi cookies melalui pengaturan browser Anda.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Third Party Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="border-orange-100">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Pihak Ketiga</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga 
                  tanpa persetujuan Anda, kecuali dalam keadaan berikut:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Ketika diwajibkan oleh hukum atau peraturan yang berlaku</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Untuk melindungi hak, properti, atau keselamatan kami atau pelanggan</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Dengan penyedia layanan tepercaya yang membantu operasi bisnis kami</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="border-orange-100">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Hubungi Kami</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Jika Anda memiliki pertanyaan tentang kebijakan privasi kami atau ingin melaksanakan 
                  hak privasi Anda, silakan hubungi kami:
                </p>
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg">
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold text-gray-900">Nama:</span>
                      <span className="text-gray-700 ml-2">ROHANAH</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Alamat:</span>
                      <span className="text-gray-700 ml-2">KP. CIBODAS, Cibodas, Tangerang, Banten 15138</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Telepon:</span>
                      <span className="text-gray-700 ml-2">0823-1059-8328</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Email:</span>
                      <span className="text-gray-700 ml-2">privacy@rohanah.com</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Kami akan merespons pertanyaan Anda dalam waktu 7 hari kerja.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Changes Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="border-orange-100">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Perubahan Kebijakan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu untuk mencerminkan 
                  perubahan dalam praktik kami atau perubahan hukum yang berlaku. Versi terbaru akan 
                  selalu tersedia di website kami.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Perubahan signifikan akan diberitahukan kepada pelanggan melalui email atau pemberitahuan 
                  di toko kami.
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
            Privasi Anda adalah prioritas kami
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