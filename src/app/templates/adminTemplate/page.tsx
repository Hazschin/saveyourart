import ArtistClass from "@/organisms/Artist/Artist";
import Package from "@/organisms/Package/Package";
import AdminTemplate from "@/templates/AdminTemplate/AdminTemplate";

export default function TemplateAdmin() {
  const Artist = new ArtistClass();
  return (
    <>
      <AdminTemplate>
        <Package title={"Productos"}>
          <Artist.Artist />
        </Package>
      </AdminTemplate>
    </>
  );
}
