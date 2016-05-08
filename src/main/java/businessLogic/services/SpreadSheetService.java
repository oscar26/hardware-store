package businessLogic.services;

import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;

import java.io.ByteArrayOutputStream;
import java.util.ArrayList;

/**
 * Created by Gerardth on 29/04/2016.
 */
public class SpreadSheetService {

    public ByteArrayOutputStream generateExcelFile(ArrayList<String> nombre, ArrayList<String> valor){

        try {

            HSSFWorkbook workbook = new HSSFWorkbook();
            HSSFSheet sheet = workbook.createSheet("Hoja1");

            HSSFRow rowhead = sheet.createRow((short)0);
            HSSFRow row = sheet.createRow((short)1);

            for(int i = 0; i < nombre.size(); i++){
                rowhead.createCell(i).setCellValue(nombre.get(i));
                row.createCell(i).setCellValue(valor.get(i));
            }

            ByteArrayOutputStream archivo = new ByteArrayOutputStream();
            workbook.write(archivo);

            return archivo;

        } catch ( Exception ex ) {
            return null;
        }
    }
}