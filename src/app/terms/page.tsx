'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, FileText, ShoppingCart, AlertTriangle, CheckCircle, Scale, Clock, RefreshCw } from 'lucide-react'
import Link from 'next/link'

export default function TermsPage() {
  const termsSections = [
    {
      title: 'Informasi Umum',
      icon: FileText,
      content: [
        'Website ini dimiliki dan dioperasikan oleh ROHANAH',
        'ROHANAH adalah toko retail yang bergerak di bidang perdagangan eceran',
        'Alamat: KP. CIBODAS, Cibodas, Tangerang, Banten 15138',
        'Telepon: 0823-1059-8328',
        'Dengan menggunakan website ini, Anda menyetujui syarat dan ketentuan ini'
      ]
    },
    {
      title: 'Produk dan Layanan',
      icon: ShoppingCart,
      content: [
        'Kami menyediakan berbagai produk makanan, minuman, dan rokok tembakau',
        'Semua produk yang dijual adalah 100% original dan berkualitas',
        'Harga dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya',
        'Ketersediaan produk tergantung pada stok yang ada',
        'Kami berhak menolak penjualan kepada siapa pun dengan alasan apa pun'
      ]
    },
    {
      title: 'Pembayaran',
      icon: CheckCircle,
      content: [
        'Pembayaran dapat dilakukan secara tunai atau melalui metode yang tersedia',
        'Harga yang tertera adalah harga final dan sudah termasuk pajak (jika ada)',
        'Kami tidak bertanggung jawab atas kerugian akibat kesalahan pembayaran',
        'Pembayaran harus diselesaikan sebelum produk diserahkan',
        'Tidak ada pengembalian uang untuk produk yang sudah dibeli kecuali ada kesalahan dari pihak kami'
      ]
    },
    {
      title: 'Pengembalian Produk',
      icon: RefreshCw,
      content: [
        'Pengembalian produk hanya diterima dalam kondisi tertentu',
        'Produk yang dikembalikan harus dalam kondisi original dan belum dibuka',
        'Pengembalian harus dilakukan dalam waktu 24 jam setelah pembelian',
        'Kami berhak menolak pengembalian yang tidak memenuhi syarat',
        'Pengembalian uang akan diproses dalam 3-5 hari kerja'
      ]
    },
    {
      title: 'Batasan Tanggung Jawab',
      icon: AlertTriangle,
      content: [
        'Kami tidak bertanggung jawab atas kerugian tidak langsung dari penggunaan produk',
        'Produk rokok dan tembakau hanya untuk pembeli dewasa (18+)',
        'Kami tidak bertanggung jawab atas efek samping dari produk yang dikonsumsi',
        'Kami berhak membatasi jumlah pembelian untuk produk tertentu',
        'Kami tidak bertanggung jawab atas keterlambatan pengiriman jika ada'
      ]
    },
    {
      title: 'Jam Operasional',
      icon: Clock,
      content: [
        'Senin - Jumat: 07:00 - 22:00',
        'Sabtu: 07:00 - 23:00',
        'Minggu: 08:00 - 22:00',
        'Jam operasional dapat berubah tanpa pemberitahuan sebelumnya',
        'Kami berhak tutup lebih awal karena alasan tertentu'
      ]
    }
  ]

  const prohibitedActions = [
    'Menggunakan website untuk tujuan ilegal atau tidak sah',
    'Mencoba merusak atau mengganggu sistem website',
    'Memasukkan informasi palsu atau menyesatkan',
    'Mengganggu pengalaman pengguna lain',
    'Melakukan penipuan atau kegiatan curang',
    'Menggunakan bot atau automated tools untuk akses website'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-orange-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  ROHANAH
                </h1>
                <p className="text-sm text-gray-600">Terms and Conditions</p>
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
              📋 Syarat & Ketentuan
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent">
              Terms and Conditions
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Syarat dan ketentuan penggunaan layanan <span className="font-semibold text-orange-600">ROHANAH</span> 
              untuk memastikan pengalaman berbelanja yang aman dan menyenangkan.
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
                    <Scale className="w-3 h-3 mr-1" />
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
                  <FileText className="w-6 h-6 mr-2 text-orange-600" />
                  Pendahuluan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Selamat datang di ROHANAH. Syarat dan ketentuan ini mengatur penggunaan website 
                  dan layanan yang kami sediakan. Dengan mengakses atau menggunakan website kami, 
                  Anda setuju untuk terikat oleh syarat dan ketentuan ini.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Jika Anda tidak setuju dengan bagian mana pun dari syarat dan ketentuan ini, 
                  Anda tidak boleh menggunakan website atau layanan kami.
                </p>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-orange-800 font-medium">
                    📌 Penting: Syarat dan ketentuan ini dapat berubah sewaktu-waktu. 
                    Penggunaan website Anda setelah perubahan berarti Anda menerima syarat yang baru.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            {termsSections.map((section, index) => {
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

      {/* Prohibited Actions */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="border-orange-100">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-2 text-orange-600" />
                  Tindakan yang Dilarang
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Pengguna website ROHANAH dilarang melakukan:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {prohibitedActions.map((action, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{action}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Intellectual Property */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="border-orange-100">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Hak Kekayaan Intelektual</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Semua konten di website ROHANAH, termasuk namun tidak terbatas pada teks, gambar, 
                  logo, dan desain, dilindungi oleh hak cipta dan undang-undang kekayaan intelektual lainnya.
                </p>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Anda tidak diperbolehkan:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Menyalin, mendistribusikan, atau menampilkan ulang konten tanpa izin</li>
                    <li>• Menggunakan logo atau merek dagang kami tanpa persetujuan tertulis</li>
                    <li>• Memodifikasi atau membuat karya turunan dari konten website</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy and Data */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="border-orange-100">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Privasi dan Data Pribadi</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Pengumpulan dan penggunaan data pribadi Anda diatur oleh Kebijakan Privasi kami. 
                  Dengan menggunakan website ini, Anda menyetujui pengumpulan dan penggunaan data 
                  sesuai dengan kebijakan tersebut.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Kami berkomitmen untuk melindungi privasi Anda dan tidak akan membagikan informasi 
                  pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali diwajibkan oleh hukum.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Governing Law */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="border-orange-100">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Hukum yang Berlaku</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. 
                  Setiap sengketa yang timbul dari atau berhubungan dengan syarat dan ketentuan ini akan 
                  diselesaikan melalui perundingan yang baik. Jika tidak mencapai kesepakatan, sengketa akan 
                  diselesaikan melalui pengadilan yang memiliki yurisdiksi.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="border-orange-100">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Informasi Kontak</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, silakan hubungi kami:
                </p>
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg">
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold text-gray-900">Nama Perusahaan:</span>
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
                      <span className="text-gray-700 ml-2">legal@rohanah.com</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Agreement */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="border-orange-100">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Persetujuan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Dengan menggunakan website dan layanan ROHANAH, Anda menyatakan bahwa:
                </p>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Anda telah membaca, memahami, dan menyetujui syarat dan ketentuan ini</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Anda berusia minimal 18 tahun untuk pembelian produk rokok dan tembakau</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Anda akan menggunakan layanan kami secara bertanggung jawab</span>
                  </li>
                </ul>
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
            Syarat dan ketentuan untuk layanan terbaik
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