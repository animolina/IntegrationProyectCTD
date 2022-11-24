package com.example.piBack.Specification;
import com.example.piBack.Model.Category;
import com.example.piBack.Model.City;
import com.example.piBack.Model.Product;
import com.example.piBack.Model.Reservation;
import org.springframework.data.jpa.domain.Specification;
import javax.persistence.criteria.*;
import java.util.Date;

public  class ProductSpecifications {

    //Products by category title
    public static Specification<Product> productsByCategoryTitle(String categoryTitle) {
        return (root, query, criteriaBuilder) -> {
            Join<Product, Category> categoryJoin = root.join("category");
            return criteriaBuilder.equal(categoryJoin.get("title"), categoryTitle);
        };
    }

    //Products by city state
    public static Specification<Product> productsByCityState (String cityState){
        return (root, query, criteriaBuilder) -> {
            Join<Product, City> cityJoin = root.join("city");
            return criteriaBuilder.equal(cityJoin.get("state"), cityState);
        };
    }

    //Products by date range (checking if it has reservations)
    public static Specification<Product> productsByDate (String startDate, String endDate){
        return (root, query, criteriaBuilder) -> {
                SetJoin<Product, Reservation> reservationJoin = root.joinSet("reservations");
                return criteriaBuilder.and(
                        criteriaBuilder.equal(reservationJoin.get("startDate"), startDate),
                        criteriaBuilder.equal(reservationJoin.get("endDate"), endDate));
            };
        }
    }
