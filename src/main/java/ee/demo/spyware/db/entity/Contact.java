package ee.demo.spyware.db.entity;

import ee.demo.spyware.dto.ContactDto;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Contact {

    @Id
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "secret_name", nullable = false)
    private String secretName;

    @Column(name = "phone_number")
    private String phoneNumber;
}
