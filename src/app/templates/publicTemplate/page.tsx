import Package from "@/organisms/Package/Package";
import ProductClass from "@/organisms/Product/Product";
import PublicTemplate from "@/templates/PublicTemplate/PublicTemplate";

export default function TemplatePublic() {
  const Product = new ProductClass({});
  return (
    <PublicTemplate>
      <Package title={"Productos"}>
        <Product.Product />
      </Package>
    </PublicTemplate>
  );
}
