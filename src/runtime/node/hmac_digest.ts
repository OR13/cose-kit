import { COSENotSupported } from '../../util/errors.js'

export default function hmacDigest(alg: string) {
  switch (alg) {
    case 'HS256':
      return 'sha256'
    case 'HS384':
      return 'sha384'
    case 'HS512':
      return 'sha512'
    default:
      throw new COSENotSupported(
        `alg ${alg} is not supported either by JOSE or your javascript runtime`,
      )
  }
}
