---
title: 'FPGA Development Board Seçim Rehberi: Doğru Kartı Nasıl Seçersiniz?'
excerpt: 'FPGA öğrenmeye başlayanlar ve projelerine uygun development board arayan geliştiriciler için kapsamlı seçim rehberi. Xilinx, Intel Altera ve diğer markaların popüler kartlarının karşılaştırması.'
date: '2024-07-19'
readTime: '15 dk'
category: 'FPGA'
---

# FPGA Development Board Seçim Rehberi: Doğru Kartı Nasıl Seçersiniz?

FPGA dünyasına adım atmak isteyen veya yeni bir proje için uygun development board arayan biriyseniz, doğru yerdesiniz. Bu yazımızda, FPGA development board seçerken dikkat edilmesi gereken faktörleri, popüler kartları ve hangi durumda hangisinin tercih edilmesi gerektiğini detaylı bir şekilde inceleyeceğiz.

## FPGA Development Board Nedir?

FPGA development board, FPGA çipinin yanı sıra gerekli güç devresi, programlama arayüzü, giriş/çıkış portları ve çeşitli çevre birimlerini (LED, buton, ekran vb.) bir araya getiren hazır kartlardır. Bu kartlar sayesinde FPGA programlamaya hızlıca başlayabilir, prototiplerinizi geliştirebilir ve projelerinizi test edebilirsiniz.

## Seçim Kriterleri

### 1. FPGA Ailesi ve Üretici

**Xilinx (AMD):**
- Zynq serisi: ARM işlemci + FPGA kombinasyonu
- Artix-7: Düşük güç, maliyet odaklı
- Kintex-7: Orta segment, güç/performans dengesi
- Virtex-7: Yüksek performans uygulamaları

**Intel Altera:**
- Cyclone: Giriş seviyesi, ekonomik
- Arria: Orta segment
- Stratix: Yüksek performans

**Lattice:**
- iCE40: Ultra düşük güç
- ECP5: Açık kaynak toolchain desteği

### 2. FPGA Boyutu (Logic Elements/LUTs)

- **Küçük projeler (10K-25K LUTs):** Basit dijital devreler, öğrenme
- **Orta projeler (25K-100K LUTs):** SoC projeler, görüntü işleme
- **Büyük projeler (100K+ LUTs):** Karmaşık sistemler, ML uygulamaları

### 3. Çevre Birimleri

**Temel bileşenler:**
- LED'ler ve butonlar (debug için kritik)
- USB programlama portu
- Güç kaynağı (USB veya harici)

**İleri seviye özellikler:**
- DDR RAM
- Ethernet portu
- HDMI çıkışı
- Analog giriş/çıkış
- PCIe slot

### 4. Bütçe Aralığı

- **Giriş seviyesi ($50-150):** Öğrenme, basit projeler
- **Orta seviye ($150-500):** Ciddi hobici projeler, prototipler
- **Profesyonel ($500+):** Ticari geliştirme, karmaşık sistemler

## Popüler Development Board'lar

### Başlangıç Seviyesi

#### 1. Digilent Basys 3 (~$150)
```
FPGA: Xilinx Artix-7 XC7A35T
LUTs: 33,280
RAM: 1,800 Kbit
Özellikler: 16 switch, 16 LED, 5 buton, 4-digit 7-segment display
Hedef kitle: Öğrenciler, FPGA'ye yeni başlayanlar
```

**Artıları:**
- Mükemmel dokümantasyon
- Bol miktarda örnek proje
- Eğitim odaklı tasarım

**Eksileri:**
- Sınırlı genişleme olanakları
- Düşük kapasiteli FPGA

#### 2. Tang Nano 9K (~$15)
```
FPGA: Gowin GW1NR-9C
LUTs: 8,640
RAM: 468 Kbit
Özellikler: 6 LED, 2 buton, RGB LCD, micro SD kart
Hedef kitle: Bütçe dostu başlangıç
```

**Artıları:**
- Çok uygun fiyat
- Küçük form factor
- LCD ekran dahil

**Eksileri:**
- Sınırlı topluluk desteği
- Az dokümantasyon

### Orta Seviye

#### 3. Digilent Arty A7 (~$250)
```
FPGA: Xilinx Artix-7 XC7A35T/XC7A100T
LUTs: 33,280 / 101,440
RAM: 1,800 / 4,860 Kbit
Özellikler: DDR3 RAM, Ethernet, 4 LED, 4 buton, 4 switch
Hedef kitle: Ciddi hobiciler, prototipleme
```

**Artıları:**
- İyi performans/fiyat oranı
- Ethernet ve DDR3 desteği
- Arduino shield uyumluluğu

**Eksileri:**
- Sınırlı giriş/çıkış sayısı
- Video çıkışı yok

#### 4. DE10-Lite (~$85)
```
FPGA: Intel MAX 10 10M50DAF484C7G
LUTs: 49,760
RAM: 1,677 Kbit
Özellikler: ADC, VGA, 10 LED, 2 buton, 10 switch
Hedef kitle: Intel Quartus öğrenmek isteyenler
```

**Artıları:**
- VGA çıkışı mevcut
- ADC ile analog giriş
- Intel toolchain deneyimi

**Eksileri:**
- Eski MAX 10 ailesi
- Sınırlı performans

### İleri Seviye

#### 5. Zynq Z-turn (~$200)
```
FPGA: Xilinx Zynq-7020
ARM: Dual-core Cortex-A9 667MHz
LUTs: 85,000
RAM: 4.9 Mbit (FPGA) + 512MB DDR3
Özellikler: Ethernet, USB, SD kart, GPIO
Hedef kitle: SoC projeleri, embedded Linux
```

**Artıları:**
- ARM işlemci + FPGA kombinasyonu
- Linux çalıştırabilme
- Güçlü topluluk desteği

**Eksileri:**
- Karmaşık toolchain
- Öğrenme eğrisi steep

#### 6. DE10-Nano (~$130)
```
FPGA: Intel Cyclone V SE 5CSEBA6U23I7
ARM: Dual-core Cortex-A9 800MHz
LUTs: 110,000
RAM: 5,570 Kbit
Özellikler: 1GB DDR3, Ethernet, USB, microSD, HDMI
Hedef kitle: SoC projeleri, AI uygulamaları
```

**Artıları:**
- HDMI çıkışı
- Güçlü ARM işlemci
- İyi fiyat/performans

**Eksileri:**
- Intel toolchain (büyük dosya boyutu)
- GPIO pin sayısı az

## Hangi Board'u Seçmeli?

### Yeni Başlıyorsanız:
**Basys 3** veya **DE10-Lite** önerilir. Her ikisi de eğitim amaçlı tasarlanmış, bol dokümantasyona sahip kartlardır.

### Bütçe Kısıtınız Varsa:
**Tang Nano 9K** mükemmel bir başlangıç noktası. Çok uygun fiyata FPGA deneyimi sunar.

### Ciddi Projeler Planlıyorsanız:
**Arty A7** (100T versiyonu) veya **DE10-Nano** tercih edilebilir. DDR RAM ve ağ bağlantısı gelişmiş projeler için önemli.

### SoC Projeleri Yapacaksanız:
**Zynq Z-turn** veya **DE10-Nano** ile ARM + FPGA kombinasyonunu keşfedebilirsiniz.

### AI/ML Uygulamaları:
**DE10-Nano** Intel OpenVINO desteği sayesinde AI uygulamaları için uygundur.

## Satın Alma Önerileri

### 1. Toolchain Lisanslarını Kontrol Edin
- Xilinx Vivado: Artix-7/Zynq için ücretsiz WebPACK sürümü
- Intel Quartus: Cyclone/MAX 10 için ücretsiz Lite sürümü
- Lattice Diamond: iCE40/ECP5 için ücretsiz sürümler

### 2. Topluluk Desteğini Araştırın
- Forum aktivitesi
- GitHub proje sayısı
- YouTube tutorial varlığı
- Türkçe kaynak bulunabilirliği

### 3. Genişleme Olanaklarını Düşünün
- PMOD connector sayısı
- Arduino shield uyumluluğu
- FMC connector varlığı
- Breadboard dostu pin dizilimi

### 4. Güç Gereksinimlerini Hesaplayın
- USB güç yeterli mi?
- Harici güç kaynağı gereksinimi
- Güç tüketimi (özellikle mobil projeler için)

## Yaygın Hatalar

### 1. Çok Büyük FPGA Seçimi
Başlangıçta küçük FPGA'lar yeterlidir. Büyük FPGA'lar derleme süresini artırır ve gereksiz maliyet yaratır.

### 2. Sadece Fiyata Odaklanma
En ucuz board her zaman en iyi seçim değildir. Dokümantasyon ve topluluk desteği önemlidir.

### 3. Toolchain Lisanslarını Göz Ardı Etme
Pahalı FPGA ailelerinde lisans masrafları olabilir. Ücretsiz toolchain seçeneklerini araştırın.

### 4. Çevre Birimlerini Atlamak
LED ve buton gibi basit çevre birimleri debug için kritiktir. Sadece FPGA çipi olan kartları tercih etmeyin.

## Gelecek Planlaması

### Öğrenme Yolu:
1. **Başlangıç:** Basys 3 ile temel dijital tasarım
2. **Gelişim:** Arty A7 ile ileri seviye projeler
3. **Uzmanlaşma:** Zynq ile SoC tasarımı

### Proje Odaklı Seçim:
- **Dijital sinyal işleme:** Yüksek RAM kapasiteli kartlar
- **Görüntü işleme:** HDMI çıkışlı kartlar
- **Ağ uygulamaları:** Ethernet destekli kartlar
- **Gömülü sistemler:** ARM+FPGA hibrit çözümler

## Sonuç

FPGA development board seçimi, hedeflerinize ve deneyim seviyenize bağlı bir karardır. Yeni başlayanlar için Basys 3, bütçe dostu çözüm arayanlar için Tang Nano 9K, ciddi projeler için Arty A7 veya DE10-Nano ideal seçeneklerdir.

Unutmayın ki en iyi board, projelerinizi gerçekleştirmenize ve FPGA becerilerinizi geliştirmenize olanak tanıyan karttır. Mükemmel kartı beklemek yerine, mevcut kaynaklarla başlayıp deneyim kazanmak daha mantıklıdır.

Hangi kartı seçerseniz seçin, FPGA dünyasında harika projeler geliştireceğinizden eminim. Sorularınız olursa yorumlarda paylaşmaktan çekinmeyin!

## Kaynaklar ve Linkler

- [Digilent Resmi Mağaza](https://digilent.com/)
- [Intel FPGA Development Kits](https://www.intel.com/content/www/us/en/products/programmable/development-kits.html)
- [Xilinx Development Boards](https://www.xilinx.com/products/boards-and-kits.html)
- [FPGA4Fun - Başlangıç Rehberleri](https://fpga4fun.com/)
- [OpenFPGA Community](https://openfpga.org/) 