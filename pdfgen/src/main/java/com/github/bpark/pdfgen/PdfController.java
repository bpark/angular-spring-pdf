package com.github.bpark.pdfgen;

import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfWriter;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

import java.io.ByteArrayOutputStream;

@RestController
@RequestMapping("/pdfs")
public class PdfController {

    @PostMapping(path = "/", produces = "application/pdf")
    public Mono<byte[]> generatePdf(@RequestBody Name name) {

        try {

            var outStream = new ByteArrayOutputStream();

            var document = new Document();
            PdfWriter.getInstance(document, outStream);

            document.open();
            var font = FontFactory.getFont(FontFactory.COURIER, 16, BaseColor.BLACK);
            var chunk = new Chunk("Hello " + name.getName(), font);

            document.add(chunk);
            document.close();

            return Mono.just(outStream.toByteArray());
        } catch (Exception e) {
            return Mono.error(e);
        }
    }
}
