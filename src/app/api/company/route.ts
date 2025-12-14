import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  try {
    const companyInfo = {
      name: 'ROHANAH',
      description: 'Toko retail terpercaya untuk semua kebutuhan makanan, minuman, dan rokok',
      address: {
        street: 'KP. CIBODAS',
        village: 'Cibodas',
        district: 'Cibodas',
        city: 'Tangerang',
        province: 'Banten',
        postalCode: '15138'
      },
      contact: {
        phone: '082310598328',
        email: 'info@rohanah.com',
        website: 'www.rohanah.com'
      },
      business: {
        type: 'Perdagangan eceran',
        categories: ['Makanan', 'Minuman', 'Rokok Tembakau'],
        established: '2020'
      },
      operatingHours: [
        { day: 'Senin - Jumat', hours: '07:00 - 22:00' },
        { day: 'Sabtu', hours: '07:00 - 23:00' },
        { day: 'Minggu', hours: '08:00 - 22:00' }
      ],
      features: [
        {
          title: '100% Original',
          description: 'Semua produk dijamin original',
          icon: 'Package'
        },
        {
          title: 'Harga Terjangkau',
          description: 'Harga bersaing dan terjangkau',
          icon: 'TrendingUp'
        },
        {
          title: 'Layanan Ramah',
          description: 'Pelayanan terbaik untuk pelanggan',
          icon: 'Users'
        },
        {
          title: 'Buka Setiap Hari',
          description: 'Siap melayani kebutuhan Anda',
          icon: 'Clock'
        }
      ],
      stats: [
        { number: '1000+', label: 'Pelanggan Setia' },
        { number: '100+', label: 'Variasi Produk' },
        { number: '5+', label: 'Tahun Pengalaman' },
        { number: '365', label: 'Hari Operasional' }
      ],
      milestones: [
        { year: '2020', title: 'Awal Mula', description: 'ROHANAH didirikan dengan visi menjadi toko retail terpercaya di Cibodas' },
        { year: '2021', title: 'Ekspansi Produk', description: 'Menambah berbagai produk makanan dan minuman berkualitas' },
        { year: '2022', title: 'Pelanggan Setia', description: 'Melayani lebih dari 1000 pelanggan setia setiap bulannya' },
        { year: '2023', title: 'Digitalisasi', description: 'Memperluas layanan dengan sistem modern dan digital' },
        { year: '2024', title: 'Komitmen Kualitas', description: 'Terus berinovasi dengan produk berkualitas dan pelayanan terbaik' }
      ],
      values: [
        { title: 'Kejujuran', description: 'Selalu jujur dalam bisnis dan memberikan produk original', icon: 'Heart' },
        { title: 'Kualitas', description: 'Hanya menyediakan produk berkualitas terbaik', icon: 'Award' },
        { title: 'Pelayanan', description: 'Memberikan pelayanan terbaik untuk setiap pelanggan', icon: 'Users' },
        { title: 'Komitmen', description: 'Berkomitmen untuk menjadi yang terbaik di bidangnya', icon: 'Target' }
      ]
    }

    return NextResponse.json({
      success: true,
      data: companyInfo,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Error fetching company info:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error',
        message: 'Failed to fetch company information'
      },
      { status: 500 }
    )
  }
}