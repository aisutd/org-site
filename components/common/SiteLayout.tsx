import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

/**
 * The default wrapper layout for the website, complete with header and footer.
 */
export default function SiteLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div>
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
