package ee.demo.spyware.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ContactDto {
    private Long id;
    private String name;
    private String secretName;
    private String phoneNumber;
}
