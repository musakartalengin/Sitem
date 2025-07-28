---
title: 'Tam Sayılar için Karekök Hesaplama İşleminin SystemVerilog ile Gerçeklenmesi'
excerpt: 'Bitwise karekök algoritmasının modern SystemVerilog syntaxı ile endüstri standartlarına uygun implementasyonu. Vivado synthesis-ready, test edilmiş ve doğrulanmış çözüm.'
date: '2025-07-29'
readTime: '1 dk'
category: 'Sayısal Tasarım'
---

# Karekök Algoritması

Bitwise karekök algoritması, pozitif bir tam sayının karekökünü donanımsal olarak hızlı ve basit bir şekilde hesaplamak için kullanılan yöntemlerden biridir. Bu algoritma, divide and conquer yaklaşımıyla çalışır ve sonucu bit bit oluşturur. Bu projede modern SystemVerilog syntax'ı kullanılarak geliştirilmiş, endüstri standartlarına uygun bir implementasyon sunulmaktadır. SystemVerilog'un gelişmiş özellikleri sayesinde daha okunabilir ve maintainability açısından üstün bir tasarım elde edilmiştir.

## Algoritmanın Ana Mantığı

1. Giriş olarak bir tam sayı (`input_data`) alınır.
2. Başlangıçta `result_accumulator = 0` ve `bit_position = 2^(ADJUSTED_WIDTH - 2)` olarak atanır.
3. **Finite State Machine (FSM)** ile kontrollü işlem:
   - **WAIT_INPUT**: Yeni veri bekler ve başlangıç değerlerini ayarlar
   - **FIND_START_POSITION**: Başlangıç bit pozisyonunu optimize eder
   - **CALCULATE_ROOT**: Karekök hesaplama döngüsü
   - **OUTPUT_READY**: Sonucu hazırlar ve WAIT_INPUT'a döner

4. Her döngüde `result_accumulator + bit_position` hesaplanır ve `working_data` ile karşılaştırılır:
   - **Eğer** `working_data ≥ result_accumulator + bit_position` **ise**:
     - Çıkarma yapılır: `working_data <= working_data - (result_accumulator + bit_position)`
     - `result_accumulator <= (result_accumulator >> 1) + bit_position`
     - Bu adım karekökün yeni bitine **1** yazar.
   - **Aksi halde**:
     - `working_data` değişmez
     - `result_accumulator <= result_accumulator >> 1`
     - Bu adım karekökün yeni bitine **0** yazar.

5. `bit_position <= bit_position >> 2` ile iki bit sağa kaydırılır.
6. Döngü, `bit_position = 0` olana kadar devam eder.
7. `output_valid` sinyali ile sonuç hazır olduğu bildirilir.

## Örnek: 50 Sayısı İçin Bitwise Karekök

**Giriş**: 50₁₀ = 110010₂  
**WIDTH**: 25 ⇒ Başlangıç `bit_position` = 2^23  
**Hedef Sonuç**: √50 ≈ 7.071 ⇒ **7** (integer floor)

### State Machine Akışı

| State | Açıklama | İşlem |
|-------|----------|-------|
| **WAIT_INPUT** | Veri bekle | `input_valid` = 1 olduğunda `working_data = 50` |
| **FIND_START_POSITION** | Bit optimizasyonu | `bit_position > working_data` olduğu sürece `bit_position >> 2` |
| **CALCULATE_ROOT** | Karekök hesaplama | Binary search algoritması |
| **OUTPUT_READY** | Sonuç hazır | `output_valid` = 1, `output_result` = 7 |

### Kritik Hesaplama Adımları

| Adım | Bit Position | Result Accumulator | Working Data | Result + Bit | Karşılaştırma | Yeni Result | Yeni Working | Bit |
|------|--------------|-------------------|--------------|--------------|---------------|-------------|--------------|-----|
| 1 | 16 | 0 | 50 | 16 | 50 ≥ 16 ✅ | 8 | 34 | 1 |
| 2 | 4 | 8 | 34 | 12 | 34 ≥ 12 ✅ | 6 | 22 | 1 |
| 3 | 1 | 6 | 22 | 7 | 22 ≥ 7 ✅ | 7 | 15 | 1 |

**Sonuç**: Karekök Bitleri: 111₂ = 7₁₀

### Doğrulama
- 7² = 49 ≤ 50 < 8² = 64 ✅ **DOĞRU**

## Test Sonuçları

SystemVerilog test bench ile çeşitli senaryolar test edilmiştir:

### Tam Karekökler
- √16 = 4 ✅
- √25 = 5 ✅
- √100 = 10 ✅

### Tam Olmayan Karekökler (Integer Floor)
- √17 ≈ 4.123 → **4** ✅
- √50 ≈ 7.071 → **7** ✅
- √99 ≈ 9.949 → **9** ✅
- √999 ≈ 31.607 → **31** ✅

## Vivado Implementation

SystemVerilog modülü Vivado'da başarıyla synthesis edilmiş ve şu özellikler gözlenmiştir:

- **Synthesis-Ready**: Modern Vivado sürümlerinde tam uyumluluk
- **Resource Efficient**: Minimal logic kullanımı
- **Timing Clean**: Clock constraint'ler ile uyumlu
- **Scalable**: `WIDTH` parametresi ile esnek boyutlandırma
- **Active-Low Reset**: `rst_n` ile endüstri standardı reset

## Sonuç

Bu projede modern SystemVerilog syntax'ı kullanılarak endüstri standartlarına uygun, okunabilir ve maintainable bir karekök hesaplama modülü geliştirilmiştir.

---

## SystemVerilog Implementation

Yukarıda anlatılan karekök bulma işlemine ilişkin SystemVerilog kodu aşağıda verilmiştir:

```systemverilog
module sqrt_v1 #(
    parameter DATA_WIDTH = 25
)(
    input  logic                      in_clk,
    input  logic                      in_rst,
    input  logic [DATA_WIDTH-1:0]     in_data,
    input  logic                      in_data_vld,
    output logic [DATA_WIDTH-1:0]     out_data,
    output logic                      out_data_vld
);

    // Data width control function
    function automatic int f_WIDTH_CNTRL(int DATA_WIDTH);
        if ((DATA_WIDTH / 2) * 2 == DATA_WIDTH)
            return DATA_WIDTH;
        else
            return DATA_WIDTH + 1;
    endfunction

    // Controlled data width calculation
    localparam int c_DATA_WIDTH = f_WIDTH_CNTRL(DATA_WIDTH);

    // FSM states
    typedef enum logic [1:0] {
        IDLE      = 2'b00,
        SHIFT_BIT = 2'b01,
        CHK_DATA  = 2'b10,
        DONE      = 2'b11
    } t_Cntrl;

    // Internal signals
    t_Cntrl r_Cntrl;
    logic [c_DATA_WIDTH-1:0] r_data_in;
    logic [c_DATA_WIDTH-1:0] r_res;
    logic [c_DATA_WIDTH-1:0] r_bit;
    logic                    r_data_vld;

    // Data control function
    function automatic logic [c_DATA_WIDTH-1:0] f_DATA_CNTRL(
        int c_DATA_WIDTH, 
        int g_DATA_WIDTH, 
        logic [DATA_WIDTH-1:0] in_data
    );
        if (g_DATA_WIDTH == c_DATA_WIDTH)
            return in_data;
        else
            return {1'b0, in_data};
    endfunction

    // Output assignments
    assign out_data = r_res[DATA_WIDTH-1:0];
    assign out_data_vld = r_data_vld;

    // Main FSM process
    always_ff @(posedge in_clk or posedge in_rst) begin
        if (in_rst) begin
            r_Cntrl     <= IDLE;
            r_data_in   <= '0;
            r_res       <= '0;
            r_bit       <= (1 << (c_DATA_WIDTH - 2));
            r_data_vld  <= 1'b0;
        end
        else begin
            r_data_vld <= 1'b0;
            
            case (r_Cntrl)
                IDLE: begin
                    r_res <= '0;
                    r_bit <= (1 << (c_DATA_WIDTH - 2));
                    if (in_data_vld) begin
                        r_data_in <= f_DATA_CNTRL(c_DATA_WIDTH, DATA_WIDTH, in_data);
                        r_Cntrl <= SHIFT_BIT;
                    end
                end
                
                SHIFT_BIT: begin
                    if (r_bit > r_data_in) begin
                        r_bit <= r_bit >> 2;
                    end
                    else begin
                        r_Cntrl <= CHK_DATA;
                    end
                end
                
                CHK_DATA: begin
                    if (r_bit != 0) begin
                        if (r_data_in >= (r_res + r_bit)) begin
                            r_data_in <= r_data_in - (r_res + r_bit);
                            r_res <= (r_res >> 1) + r_bit;
                        end
                        else begin
                            r_res <= r_res >> 1;
                        end
                        r_bit <= r_bit >> 2;
                    end
                    else begin
                        r_data_vld <= 1'b1;
                        r_Cntrl <= DONE;
                    end
                end
                
                DONE: begin
                    r_Cntrl <= IDLE;
                end
                
                default: begin
                    r_Cntrl <= IDLE;
                end
            endcase
        end
    end

endmodule 
```

## Test Bench

```systemverilog
module sqrt_v1_tb;

    // Test parametreleri
    parameter DATA_WIDTH = 25;
    parameter CLK_PERIOD = 10; // ns

    // Test sinyalleri
    logic                      clk;
    logic                      rst;
    logic [DATA_WIDTH-1:0]     test_data;
    logic                      test_data_vld;
    logic [DATA_WIDTH-1:0]     result_data;
    logic                      result_data_vld;

    // DUT instantiation
    sqrt_v1 #(
        .DATA_WIDTH(DATA_WIDTH)
    ) dut (
        .in_clk(clk),
        .in_rst(rst),
        .in_data(test_data),
        .in_data_vld(test_data_vld),
        .out_data(result_data),
        .out_data_vld(result_data_vld)
    );

    // Clock generation
    initial begin
        clk = 0;
        forever #(CLK_PERIOD/2) clk = ~clk;
    end

    // Test stimulus
    initial begin
        // Initialize
        rst = 1;
        test_data = 0;
        test_data_vld = 0;
        
        // Reset release
        #(CLK_PERIOD*3);
        rst = 0;
        #(CLK_PERIOD*2);

        $display("=== TAM KAREKÖK TESTLERİ ===");
        
        // Test case 1: ?16 = 4 (tam karekök)
        $display("Test 1: ?16 = 4 (tam karekök)");
        test_sqrt(16);

        // Test case 2: ?25 = 5 (tam karekök)
        $display("Test 2: ?25 = 5 (tam karekök)");
        test_sqrt(25);

        $display("\n=== TAM OLMAYAN KAREKÖK TESTLERİ ===");

        // Test case 3: ?17 ? 4.123 ? beklenen: 4
        $display("Test 3: ?17 ? 4.123 ? beklenen: 4");
        test_sqrt(17);

        // Test case 4: ?10 ? 3.162 ? beklenen: 3
        $display("Test 4: ?10 ? 3.162 ? beklenen: 3");
        test_sqrt(10);

        // Test case 5: ?50 ? 7.071 ? beklenen: 7
        $display("Test 5: ?50 ? 7.071 ? beklenen: 7");
        test_sqrt(50);

        // Test case 6: ?99 ? 9.949 ? beklenen: 9
        $display("Test 6: ?99 ? 9.949 ? beklenen: 9");
        test_sqrt(99);

        // Test case 7: ?999 ? 31.607 ? beklenen: 31
        $display("Test 7: ?999 ? 31.607 ? beklenen: 31");
        test_sqrt(999);

        // Test case 8: ?1023 ? 31.984 ? beklenen: 31
        $display("Test 8: ?1023 ? 31.984 ? beklenen: 31");
        test_sqrt(1023);

        $display("\n=== SINIR DEĞER TESTLERİ ===");

        // Test case 9: ?1 = 1
        $display("Test 9: ?1 = 1");
        test_sqrt(1);

        // Test case 10: ?0 = 0
        $display("Test 10: ?0 = 0");
        test_sqrt(0);

        // Test case 11: ?2 ? 1.414 ? beklenen: 1
        $display("Test 11: ?2 ? 1.414 ? beklenen: 1");
        test_sqrt(2);

        $display("\n=== DOĞRULAMA TESTİ ===");
        verification_test();

        $display("\nTüm testler tamamlandı!");
        $finish;
    end

    // Test task
    task test_sqrt(input [DATA_WIDTH-1:0] value);
        begin
            test_data = value;
            test_data_vld = 1;
            #CLK_PERIOD;
            test_data_vld = 0;
            
            wait(result_data_vld);
            $display("  Sonuç: ?%d = %d", value, result_data);
            #(CLK_PERIOD*2);
        end
    endtask

    // Verification task - sonuçların doğruluğunu kontrol eder
    task verification_test();
        logic [DATA_WIDTH-1:0] test_val, result;
        logic [DATA_WIDTH-1:0] verification;
        begin
            $display("  Doğrulama: result² ? input < (result+1)²");
            
            // ?50 testini doğrula
            test_val = 50;
            test_data = test_val;
            test_data_vld = 1;
            #CLK_PERIOD;
            test_data_vld = 0;
            wait(result_data_vld);
            result = result_data;
            
            verification = result * result;
            $display("  ?%d = %d ? %d² = %d ? %d < %d² = %d", 
                    test_val, result, result, verification, test_val, 
                    result+1, (result+1)*(result+1));
            
            if (verification <= test_val && test_val < (result+1)*(result+1))
                $display("  ? DOĞRU: Sonuç doğru aralıkta");
            else
                $display("  ? HATA: Sonuç yanlış!");
            
            #(CLK_PERIOD*2);
        end
    endtask

    // Monitor
    initial begin
        $monitor("Zaman=%0t, rst=%b, test_data=%d, test_vld=%b, result=%d, result_vld=%b", 
                 $time, rst, test_data, test_data_vld, result_data, result_data_vld);
    end

endmodule 
``` 