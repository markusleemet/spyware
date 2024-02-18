package ee.demo.spyware.dto;

import ee.demo.spyware.db.entity.Contact;
import lombok.Data;

@Data
public class ContactDto {
    private Long id;
    private String name;
    private String secretName;
    private String phoneNumber;
}
