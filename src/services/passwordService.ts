export default function generatePass(): string {
  let password: string = '';
  let chars: string = 'Aa@$#123456789!&FGJKHIOPsodkfcvm';
  const PASS_LENGTH = 10

  for (let i = 0; i < PASS_LENGTH; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return password
}