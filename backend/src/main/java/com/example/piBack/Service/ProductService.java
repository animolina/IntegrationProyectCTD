package com.example.piBack.Service;
import com.example.piBack.Model.Product;
import com.example.piBack.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
import static com.example.piBack.Specification.ProductSpecifications.*;


@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;
    public Product addProduct(Product product) {
        productRepository.save(product);
        return product;
    }

    public Collection<Product> listProduct(){
        List<Product> products = productRepository.findAll();
        return products;
    }

    public List<Product> findAllByCategoryCityDate(@Nullable String categoryTitle, @Nullable String cityState, @Nullable LocalDate startDate, @Nullable LocalDate endDate){
        Specification<Product> specification = Specification.where(null);
        if(categoryTitle != null){
            specification = specification.and(productsByCategoryTitle(categoryTitle));
        }
        if(cityState != null){
            specification = specification.and(productsByCityState(cityState));
        }
        if(startDate != null && endDate != null){
            specification = specification.and(productsByDate(startDate, endDate));
        }

        return productRepository.findAll(specification);
    }


    public Product editProduct(Product product) {
        productRepository.save(product);
        return product;
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    public Optional<Product> findProduct(Long id) {
        Optional<Product> product = productRepository.findById(id);
        return product;
    }

}
