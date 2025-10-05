import { BaseIcon, type IconProps } from "./BaseIcon";
import ferretIcon from "../../assets/ferrets-icon.png";

// Frame 1 of yarrHey
export default function IconFerrets(props: IconProps) {
  return (
    <BaseIcon viewBox="0 0 78 78" {...props}>
      <image href={ferretIcon} width="78" height="78" x="0" y="0" />
    </BaseIcon>
  );
}
