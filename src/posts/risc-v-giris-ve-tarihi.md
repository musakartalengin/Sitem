---
title: 'RISC-V Mimarisi: Tarihçesi ve Uygulama Örnekleriyle Giriş'
excerpt: 'RISC-V açık kaynak işlemci mimarisinin tarihçesi, temel özellikleri ve örnek kodlarla adım adım giriş rehberi...'
date: '2024-03-05'
readTime: '12 dk'
category: 'Bilgisayar Mimarisi'
---

# RISC-V Mimarisi: Tarihçesi ve Uygulama Örnekleriyle Giriş

RISC-V (Risk Five olarak telaffuz edilir), açık kaynak bir işlemci talimat seti mimarisidir (ISA). Bu yazımızda RISC-V'nin tarihçesini, temel özelliklerini ve basit örneklerle nasıl kodlama yapılacağını adım adım öğreneceğiz.

## 1. RISC-V'nin Tarihçesi

### RISC Devriminin Başlangıcı

RISC (Reduced Instruction Set Computer - İndirgenmiş Komut Kümesi Bilgisayarı) kavramı, 1980'lerde akademik çalışmalar sırasında ortaya çıkmıştır. CISC (Complex Instruction Set Computer) mimarilerine alternatif olarak geliştirilen RISC mimarileri, daha az ve daha basit komutlarla işlemcilerin daha hızlı çalışmasını amaçlar.

### RISC-V'nin Doğuşu

RISC-V, 2010 yılında Berkeley Üniversitesi'nde Prof. Krste Asanović, Andrew Waterman ve Yunsup Lee önderliğinde bir araştırma projesi olarak başladı. Temel hedef, eğitim, araştırma ve ticari kullanım için tamamen açık, lisans kısıtlaması olmayan bir ISA geliştirmekti.

### Önemli Tarihsel Dönüm Noktaları

- **2010**: Berkeley'de proje başlangıcı
- **2014**: İlk RISC-V çalıştayı düzenlendi
- **2015**: RISC-V Vakfı kuruldu
- **2018**: RISC-V Uluslararası organizasyonu oluşturuldu
- **2019**: RISC-V mimarisinin ilk resmi dondurulmuş sürümü yayınlandı
- **2021**: Ticari RISC-V işlemciler piyasaya sürülmeye başlandı
- **2022+**: RISC-V ekosistemi hızla büyümeye devam ediyor

## 2. RISC-V Mimarisinin Temel Özellikleri

### Modüler Yapı

RISC-V'nin en önemli özelliklerinden biri modüler yapısıdır. Temel komut seti (RV32I/RV64I) oldukça küçüktür ve ihtiyaca göre ek modüller eklenebilir:

- **I**: Temel tamsayı komutları (Base Integer Instructions)
- **M**: Çarpma ve bölme komutları (Multiplication and Division)
- **F**: Tek hassasiyetli kayan nokta işlemleri (Single-Precision Floating Point)
- **D**: Çift hassasiyetli kayan nokta işlemleri (Double-Precision Floating Point)
- **A**: Atomik işlemler (Atomic Instructions)
- **C**: Sıkıştırılmış komutlar (Compressed Instructions)

Bu modüller ihtiyaca göre birleştirilebilir (örn. RV32IMF, RV64GC gibi).

### Açık Kaynak ve Lisans Avantajı

RISC-V'nin en büyük avantajlarından biri tamamen açık kaynak olması ve kullanım için herhangi bir lisans ücreti gerektirmemesidir. Bu durum:

- Akademik çalışmalar için idealdir
- Yeni girişimler için maliyet bariyerini kaldırır
- Üreticilere tasarım özgürlüğü sağlar
- Güvenlik açısından şeffaflık sunar

## 3. RISC-V Assembly Programlama: İlk Adımlar

### Temel Kayıt (Register) Yapısı

RISC-V mimarisi, 32 adet genel amaçlı kayıt (x0-x31) kullanır. Bunların bazıları özel amaçlar için ayrılmıştır:

```
x0  (zero): Her zaman 0 değerini içerir
x1  (ra):   Return Address - Dönüş adresi
x2  (sp):   Stack Pointer - Yığın işaretçisi
x3  (gp):   Global Pointer - Global işaretçi
x4  (tp):   Thread Pointer - İş parçacığı işaretçisi
x5-x7 (t0-t2): Geçici değerler
x8-x9 (s0-s1): Kaydedilen değerler (s0 aynı zamanda fp - frame pointer)
x10-x17 (a0-a7): Fonksiyon argümanları/dönüş değerleri
x18-x27 (s2-s11): Kaydedilen değerler
x28-x31 (t3-t6): Geçici değerler
```

### İlk RISC-V Assembly Programı

İşte basit bir "Merhaba Dünya" programı:

```assembly
# merhaba.s - Basit bir RISC-V assembly programı

.section .data
mesaj:
    .string "Merhaba, RISC-V Dünyası!\n"

.section .text
.global _start
_start:
    # write syscall için hazırlık
    li a7, 64           # write syscall numarası
    li a0, 1            # dosya tanımlayıcısı (stdout)
    la a1, mesaj        # mesaj adresini a1'e yükle
    li a2, 24           # mesaj uzunluğu
    ecall               # sistemin çağrısı yapılır
    
    # exit syscall için hazırlık
    li a7, 93           # exit syscall numarası
    li a0, 0            # dönüş kodu
    ecall               # sistem çağrısı yapılır
```

Bu programın adım adım açıklaması:

1. `.section .data`: Veri bölümünü tanımlar
2. `mesaj` etiketiyle bir metin tanımlanır
3. `.section .text`: Kod bölümünü tanımlar
4. `_start`: Programın başlangıç noktasını belirtir
5. Sistem çağrıları (syscall) ile ekrana yazı yazdırır ve programı sonlandırır

### Programı Derleme ve Çalıştırma

```bash
# RISC-V GCC derleyicisi ile derleme
riscv64-unknown-elf-gcc -nostdlib -o merhaba merhaba.s

# QEMU emülatörü ile çalıştırma
qemu-riscv64 merhaba
```

## 4. C Dilinde RISC-V Programlama

RISC-V için C programları yazmak daha kolaydır ve assembly'den daha portabl (taşınabilir) kodlar yazmanızı sağlar.

```c
// merhaba.c - RISC-V için C programı

#include <stdio.h>

int main() {
    printf("Merhaba, RISC-V Dünyası!\n");
    
    // Basit bir hesaplama
    int a = 5, b = 10;
    int sonuc = a + b;
    
    printf("%d + %d = %d\n", a, b, sonuc);
    
    return 0;
}
```

Derleme ve çalıştırma:

```bash
# RISC-V için C derlemesi
riscv64-unknown-elf-gcc -o merhaba_c merhaba.c

# Çalıştırma (emülatör ile)
qemu-riscv64 merhaba_c
```

## 5. RISC-V Programlama: Temel Komutlar ve Örnekleri

### Aritmetik İşlemler

```assembly
# Toplama işlemi
add  t0, t1, t2    # t0 = t1 + t2

# Çıkarma işlemi
sub  t0, t1, t2    # t0 = t1 - t2

# Sabit değerle toplama
addi t0, t1, 10    # t0 = t1 + 10
```

### Mantıksal İşlemler

```assembly
# VE (AND) işlemi
and  t0, t1, t2    # t0 = t1 & t2

# VEYA (OR) işlemi
or   t0, t1, t2    # t0 = t1 | t2

# XOR işlemi
xor  t0, t1, t2    # t0 = t1 ^ t2

# Sabit değerle AND işlemi
andi t0, t1, 15    # t0 = t1 & 15
```

### Bellek İşlemleri

```assembly
# Kelime yükleme (4 byte)
lw   t0, 0(t1)     # t0 = Memory[t1 + 0]

# Kelime kaydetme
sw   t0, 4(t1)     # Memory[t1 + 4] = t0

# Byte yükleme
lb   t0, 0(t1)     # t0 = SignExtend(Memory[t1 + 0])

# Byte kaydetme
sb   t0, 0(t1)     # Memory[t1 + 0] = t0[7:0]
```

### Dallanma Komutları

```assembly
# Eğer eşitse dallan
beq  t0, t1, etiket  # if (t0 == t1) goto etiket

# Eğer eşit değilse dallan
bne  t0, t1, etiket  # if (t0 != t1) goto etiket

# Koşulsuz dallanma
j    etiket          # goto etiket
```

## 6. Örnek Uygulama: Fibonacci Dizisi

Aşağıdaki örnek, RISC-V assembly dilinde Fibonacci dizisinin ilk 10 terimini hesaplayan bir programdır:

```assembly
# fibonacci.s - Fibonacci dizisinin ilk 10 terimini hesaplar

.section .data
mesaj1: .string "Fibonacci Dizisi (ilk 10 terim):\n"
mesaj2: .string "Fibonacci(%d) = %d\n"

.section .text
.global main

main:
    # Mesaj1'i yazdır
    la a0, mesaj1
    call printf
    
    # Fibonacci hesaplaması için hazırlık
    li s0, 10        # Terim sayısı
    li s1, 0         # İlk terim (F_0)
    li s2, 1         # İkinci terim (F_1)
    li s3, 0         # Döngü sayacı (i)
    
fibonacci_loop:
    # Döngü kontrolü
    beq s3, s0, exit  # Eğer i == 10 ise çık
    
    # F_i değerini yazdır
    la a0, mesaj2
    mv a1, s3         # i değeri
    mv a2, s1         # F_i değeri
    call printf
    
    # Bir sonraki Fibonacci terimini hesapla
    add t0, s1, s2    # t0 = F_i + F_{i+1}
    mv s1, s2         # F_i = F_{i+1}
    mv s2, t0         # F_{i+1} = t0
    
    # Sayacı artır
    addi s3, s3, 1    # i++
    j fibonacci_loop
    
exit:
    li a0, 0
    ret
```

Bu programı derlemek ve çalıştırmak için:

```bash
riscv64-unknown-elf-gcc -o fibonacci fibonacci.s
qemu-riscv64 fibonacci
```

## 7. RISC-V Donanım Geliştirme 

RISC-V mimarisi ile donanım geliştirmek de mümkündür. Bunun için HDL (Hardware Description Language) dillerinden Verilog veya VHDL kullanılabilir.

İşte basit bir RISC-V ALU (Arithmetic Logic Unit) örneği:

```verilog
// Basit bir RISC-V ALU
module riscv_alu(
    input [31:0] a,           // İlk operand
    input [31:0] b,           // İkinci operand
    input [3:0]  alu_control, // ALU kontrol sinyali
    output reg [31:0] result, // İşlem sonucu
    output zero              // Sıfır bayrağı
);

    assign zero = (result == 0);
    
    always @(*) begin
        case(alu_control)
            4'b0000: result = a + b;           // ADD
            4'b0001: result = a - b;           // SUB
            4'b0010: result = a & b;           // AND
            4'b0011: result = a | b;           // OR
            4'b0100: result = a ^ b;           // XOR
            4'b0101: result = (a < b) ? 1 : 0; // SLT
            4'b0110: result = a << b[4:0];     // SLL
            4'b0111: result = a >> b[4:0];     // SRL
            4'b1000: result = $signed(a) >>> b[4:0]; // SRA
            default: result = 0;
        endcase
    end
endmodule
```

## 8. RISC-V Geliştirme Ortamının Kurulumu

RISC-V için geliştirme yapmak istiyorsanız, aşağıdaki adımları izleyebilirsiniz:

### Linux (Ubuntu) Ortamında Kurulum

```bash
# Gerekli paketleri kur
sudo apt-get update
sudo apt-get install autoconf automake autotools-dev curl libmpc-dev
sudo apt-get install libmpfr-dev libgmp-dev gawk build-essential bison flex
sudo apt-get install texinfo gperf libtool patchutils bc zlib1g-dev libexpat-dev

# RISC-V GNU Toolchain'i indir ve derle
git clone https://github.com/riscv/riscv-gnu-toolchain
cd riscv-gnu-toolchain
./configure --prefix=/opt/riscv
make

# PATH'e ekle
echo 'export PATH=$PATH:/opt/riscv/bin' >> ~/.bashrc
source ~/.bashrc

# QEMU RISC-V emülatörünü kur
sudo apt-get install qemu-user-static
```

### Windows Ortamında Kurulum

Windows'ta RISC-V geliştirmesi için WSL (Windows Subsystem for Linux) kullanabilir veya aşağıdaki gibi doğrudan kurulum yapabilirsiniz:

1. [RISC-V GNU Toolchain Windows Build](https://github.com/xpack-dev-tools/riscv-none-embed-gcc-xpack/releases) adresinden en son sürümü indirin
2. İndirdiğiniz kurulum dosyasını çalıştırın ve yönergeleri takip edin
3. PATH ortam değişkenine kurulum dizinini ekleyin
4. [QEMU for Windows](https://qemu.weilnetz.de/w64/) adresinden QEMU'yu indirip kurun

## 9. RISC-V'nin Kullanım Alanları

RISC-V mimarisi, esnekliği ve açık kaynak yapısı sayesinde birçok alanda kullanılabilir:

- **Gömülü Sistemler**: IoT cihazları, sensörler
- **Mobil Cihazlar**: Düşük güç tüketimli işlemciler
- **Sunucular**: Özelleştirilmiş veri merkezi çözümleri
- **AI/ML Hızlandırıcıları**: Özel donanım çözümleri
- **Akademik Araştırmalar**: Mimari yenilikler ve eğitim

## 10. RISC-V'nin Geleceği

RISC-V, oldukça umut verici bir geleceğe sahiptir:

- Açık kaynak ekosisteminin hızla büyümesi
- Büyük teknoloji şirketlerinin (Google, NVIDIA, Western Digital vb.) desteği
- Çin ve Avrupa'nın dijital bağımsızlık stratejilerinde RISC-V'nin rolü
- Özelleştirilebilir işlemci ihtiyacının artması
- Eğitim ve AR/VR gibi yeni uygulama alanları

## Sonuç

RISC-V, açık kaynak felsefesini donanım dünyasına taşıyan önemli bir teknolojik gelişmedir. Modüler yapısı, lisans kısıtlamalarının olmaması ve topluluk desteği sayesinde gelecekte çok daha fazla alanda kullanılacaktır.

Bu yazımızda RISC-V'nin tarihçesini, temel özelliklerini ve uygulama örneklerini inceledik. Sizin de RISC-V ile ilgili deneyimleriniz veya sorularınız varsa, yorumlarda paylaşabilirsiniz.

## Kaynaklar

- [RISC-V International](https://riscv.org/)
- [RISC-V Specifications](https://riscv.org/technical/specifications/)
- [The RISC-V Reader](http://riscvbook.com/)
- [RISC-V Assembly Programmer's Manual](https://github.com/riscv/riscv-asm-manual/blob/master/riscv-asm.md)
- [SiFive Developer Resources](https://www.sifive.com/resources) 